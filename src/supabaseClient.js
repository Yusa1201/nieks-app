import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oyzjcumtukcsfeweizge.supabase.co'
const supabaseKey = 'sb_publishable_QI038KkqbnqnfX09hHje8w_9nh0OaF-'

export const supabase = createClient(supabaseUrl, supabaseKey)