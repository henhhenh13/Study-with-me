import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://duokmsfjmtqhwwcgskvj.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1b2ttc2ZqbXRxaHd3Y2dza3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwNjIwNTcsImV4cCI6MTk5NDYzODA1N30.H-6NBIz-j2P86_5zvPVSJzpIAzghKbx4OLMiCGqRBYY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
