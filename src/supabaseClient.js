import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ohekkhnticlghgsbdukg.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oZWtraG50aWNsZ2hnc2JkdWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4Mjg2MTcsImV4cCI6MjA0NDQwNDYxN30.49CLhd5OOy34h8T68Pvatv_j9NBeuaF7Cn3IN3BkiWM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
