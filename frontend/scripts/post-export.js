// Create a 404.html from index for GitHub Pages SPA support
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

const outDir = join(process.cwd(), 'out')
const indexFile = join(outDir, 'index.html')
const fourOFour = join(outDir, '404.html')
if (existsSync(indexFile)) {
  copyFileSync(indexFile, fourOFour)
  console.log('Created 404.html for GitHub Pages routing')
}
