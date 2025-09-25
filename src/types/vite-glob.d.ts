// Minimal typing to appease TS for Vite's import.meta.glob
interface ImportMeta {
  glob: (
    pattern: string,
    options?: { eager?: boolean; import?: string }
  ) => Record<string, unknown>;
}


