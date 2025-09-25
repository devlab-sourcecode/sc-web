// Utility helpers to load logo images grouped by folder sets
// Usage structure:
// - Folders: src/assets/logo/<set>/<col>/*.png|jpg|jpeg|webp|svg
// - getLogoSetNames(): string[] of set names
// - getLogoSetColumns('set1'): string[][] where each inner array is a column (row)

// Preload all logo files under src/assets/logo/** using Vite's glob import
const allLogoFiles = (import.meta as any).glob(
  '/src/assets/logo/**/*.{png,jpg,jpeg,webp,svg}',
  { eager: true, import: 'default' }
) as Record<string, string>

function extractSetName(path: string): string | null {
  // Matches /src/assets/logo/<setName>/filename.ext
  const match = path.match(/\/src\/assets\/logo\/([^/]+)\//)
  return match ? match[1] : null
}

export function getAllLogoSets(): Record<string, string[]> {
  const result: Record<string, string[]> = {}
  for (const [path, mod] of Object.entries(allLogoFiles)) {
    const setName = extractSetName(path)
    if (!setName) continue
    if (!result[setName]) result[setName] = []
    result[setName].push(mod)
  }
  return result
}

export function getLogoSet(setName: string): string[] {
  const sets = getAllLogoSets()
  return sets[setName] ?? []
}

function extractColName(path: string): { set: string; col: string } | null {
  // Matches /src/assets/logo/<set>/<col>/filename.ext
  const match = path.match(/\/src\/assets\/logo\/([^/]+)\/([^/]+)\//)
  if (!match) return null
  return { set: match[1], col: match[2] }
}

export function getLogoSetColumns(setName: string): string[][] {
  const colMap: Record<string, string[]> = {}
  for (const [path, mod] of Object.entries(allLogoFiles)) {
    const info = extractColName(path)
    if (!info) continue
    if (info.set !== setName) continue
    if (!colMap[info.col]) colMap[info.col] = []
    colMap[info.col].push(mod)
  }
  const sortKey = (name: string) => {
    const m = name.match(/(\d+)$/)
    return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER
  }
  const cols = Object.keys(colMap).sort((a, b) => sortKey(a) - sortKey(b))
  return cols.map((c) => colMap[c])
}

export function getLogoSetNames(): string[] {
  const sets = getAllLogoSets()
  return Object.keys(sets).sort()
}

export default { getLogoSet, getAllLogoSets, getLogoSetColumns, getLogoSetNames }


