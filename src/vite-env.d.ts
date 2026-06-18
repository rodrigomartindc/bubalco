/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_ENV?: 'preview' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
