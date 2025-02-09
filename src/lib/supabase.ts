
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ryycjmitvqpvgnnszeyj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5eWNqbWl0dnFwdmdubnN6ZXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjEyNDMsImV4cCI6MjA1NDY5NzI0M30.SKCy08pugOG1sADgFET8Xwhzn5aB2YePwu87Yco3hkY";

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL ve anahtar gerekli. Lütfen yapılandırmanızı kontrol edin.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
