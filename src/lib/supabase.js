import { createClient } from '@supabase/supabase-js'

// Read the values from .env.local
const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

// Fail loudly if they're missing, so you know exactly what's wrong
if (!url || !key) {
  throw new Error('Supabase keys missing. Check .env.local and restart npm run dev.')
}

// One shared connection for the whole website
export const supabase = createClient(url, key)