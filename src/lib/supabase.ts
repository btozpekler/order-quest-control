
import { createClient } from '@supabase/supabase-js';

// Use your Supabase project URL and anon key
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL and key are required. Please check your configuration.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
