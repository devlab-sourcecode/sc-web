/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LINE_ADD_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


