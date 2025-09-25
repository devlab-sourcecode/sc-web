// Utility helpers to load logo images grouped by folder sets
// Usage:
// - Create folders like: src/assets/logo/set1, src/assets/logo/set2
// - Put .png/.jpg/.jpeg/.webp/.svg files inside each set folder
// - In component: import { getLogoSet } from '@/assets/logo/sets'
//   const logos = getLogoSet('set1') // -> string[] of URLs

type LogoModule = { default: string } | string

// Preload all logo files under src/assets/logo/** using Vite's glob import
const allLogoFiles = import.meta.glob<LogoModule>(
  '/src/assets/logo/**/*.{png,jpg,jpeg,webp,svg}',
  { eager: true, import: 'default' }
)

function toUrl(mod: LogoModule): string {
  return typeof mod === 'string' ? mod : mod
}

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
    result[setName].push(toUrl(mod))
  }
  return result
}

export function getLogoSet(setName: string): string[] {
  const sets = getAllLogoSets()
  return sets[setName] ?? []
}

export default { getLogoSet, getAllLogoSets }


