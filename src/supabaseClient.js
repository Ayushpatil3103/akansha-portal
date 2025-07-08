import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cdwouiyfxlsvygfymhiw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkd291aXlmeGxzdnlnZnltaGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5Nzk2MzcsImV4cCI6MjA2NzU1NTYzN30.k-swVTIi1Ma71GHPCXjejTytu4ldcVpWTDRcsBRv6Ps';

export const supabase = createClient(supabaseUrl, supabaseKey);
