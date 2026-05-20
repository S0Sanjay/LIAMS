import { useCallback, useEffect, useState } from 'react';
import { uploadEventImage } from '../../lib/storage';
import { supabase } from '../../lib/supabase';
import './Admin.css';

export default function PreviousEvents() {
  const [rows, setRows] = useState([]);
  const [category, setCategory] = useState('');
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const { data, error: err } = await supabase
      .from('previous_events')
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
    if (!file) {
      setError('Choose an image to upload.');
      return;
    }
    setError('');
    setUploading(true);
    try {
      const imageUrl = await uploadEventImage(file);
      const { error: err } = await supabase.from('previous_events').insert({
        image_url: imageUrl,
        category: category.trim() || null,
        caption: caption.trim() || null,
      });
      if (err) throw new Error(err.message);
      setCategory('');
      setCaption('');
      setFile(null);
      load();
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this gallery item?')) return;
    await supabase.from('previous_events').delete().eq('id', id);
    load();
  }

  return (
    <div className="admin-card">
      <h2>Previous events gallery</h2>
      <form className="admin-form" onSubmit={handleAdd}>
        <label>
          Image
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            required
          />
        </label>
        <label>
          Category
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Conference, Workshop, …"
          />
        </label>
        <label>
          Caption
          <input value={caption} onChange={(e) => setCaption(e.target.value)} />
        </label>
        <button type="submit" className="btn btn--primary" disabled={uploading}>
          {uploading ? 'Uploading…' : 'Upload'}
        </button>
      </form>
      {error && <p className="admin-error">{error}</p>}
      {loading ? (
        <p className="admin-muted">Loading…</p>
      ) : (
        <ul className="admin-list">
          {rows.map((row) => (
            <li key={row.id} className="admin-list__item">
              {row.image_url && (
                <img src={row.image_url} alt="" className="admin-thumb" />
              )}
              <div>
                {row.category && <strong>{row.category}</strong>}
                {row.caption && <p className="admin-muted">{row.caption}</p>}
              </div>
              <button type="button" className="btn btn--navy" onClick={() => handleDelete(row.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
