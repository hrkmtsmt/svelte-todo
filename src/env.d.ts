/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_API_URL: string
  readonly VITE_SUPABASE_JET_SECRET: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_SUPABASE_SERVICE_ROLE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
