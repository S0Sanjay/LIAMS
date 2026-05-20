import { useCallback, useEffect, useState } from 'react';
import {
  DEFAULT_CERTIFICATIONS_SECTION_TITLE,
  SITE_SETTING_KEYS,
} from '../lib/siteSettingsKeys';
import { supabase } from '../lib/supabase';

/** PostgREST error when the table is missing or schema cache is stale */
function isSiteSettingsTableMissing(error) {
  if (!error) return false;
  const msg = `${error.message ?? ''} ${error.details ?? ''}`.toLowerCase();
  return (
    error.code === 'PGRST205' ||
    error.code === '42P01' ||
    msg.includes('site_settings') ||
    msg.includes('schema cache')
  );
}

export function useCertificationsSectionTitle() {
  const [sectionTitle, setSectionTitle] = useState(DEFAULT_CERTIFICATIONS_SECTION_TITLE);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', SITE_SETTING_KEYS.CERTIFICATIONS_SECTION_TITLE)
      .maybeSingle();

    if (!error && data?.value?.trim()) {
      setSectionTitle(data.value.trim());
    } else if (!error || isSiteSettingsTableMissing(error)) {
      setSectionTitle(DEFAULT_CERTIFICATIONS_SECTION_TITLE);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { sectionTitle, loading, refresh: load };
}

export async function saveCertificationsSectionTitle(title) {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  const value = title.trim() || DEFAULT_CERTIFICATIONS_SECTION_TITLE;
  const { error } = await supabase.from('site_settings').upsert(
    {
      key: SITE_SETTING_KEYS.CERTIFICATIONS_SECTION_TITLE,
      value,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'key' },
  );

  if (error) {
    if (isSiteSettingsTableMissing(error)) {
      throw new Error(
        'The site_settings table is missing. Run supabase/migrations/add_site_settings.sql in the Supabase SQL Editor, then try again.',
      );
    }
    throw error;
  }
  return value;
}
