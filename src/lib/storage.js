import { EVENT_IMAGES_BUCKET, supabase } from './supabase';

export async function uploadEventImage(file) {
  if (!supabase) throw new Error('Supabase is not configured');

  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const fileName = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;

  const { error } = await supabase.storage
    .from(EVENT_IMAGES_BUCKET)
    .upload(fileName, file, { upsert: false });

  if (error) throw error;

  const { data } = supabase.storage.from(EVENT_IMAGES_BUCKET).getPublicUrl(fileName);
  return data.publicUrl;
}
