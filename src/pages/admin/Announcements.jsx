import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import './Admin.css';

export default function Announcements() {
  const [rows, setRows] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const { data, error: err } = await supabase
      .from('announcements')
      .select('*')
      .order('created_at', { ascending: false });
    if (err) setError(err.message);
    else setRows(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function handleAdd(e) {
    e.preventDefault();
    setError('');
    const { error: err } = await supabase.from('announcements').insert({ text: text.trim() });
    if (err) {
      setError(err.message);
      return;
    }
    setText('');
    load();
  }

  async function handleToggle(id, enabled) {
    await supabase.from('announcements').update({ enabled: !enabled }).eq('id', id);
    load();
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this announcement?')) return;
    await supabase.from('announcements').delete().eq('id', id);
    load();
  }

  return (
    <div className="admin-card">
      <h2>Announcements</h2>
      <form className="admin-form" onSubmit={handleAdd}>
        <label>
          New announcement
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            required
            placeholder="Text shown on the homepage ticker"
          />
        </label>
        <button type="submit" className="btn btn--primary">
          Add
        </button>
      </form>
      {error && <p className="admin-error">{error}</p>}
      {loading ? (
        <p className="admin-muted">Loading…</p>
      ) : (
        <ul className="admin-list">
          {rows.map((row) => (
            <li
              key={row.id}
              className={`admin-list__item${row.enabled ? '' : ' admin-list__item--disabled'}`}
            >
              <span>{row.text}</span>
              <div className="admin-actions">
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => handleToggle(row.id, row.enabled)}
                >
                  {row.enabled ? 'Disable' : 'Enable'}
                </button>
                <button type="button" className="btn btn--navy" onClick={() => handleDelete(row.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
