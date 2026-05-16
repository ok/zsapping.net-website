import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const root = path.resolve(fileURLToPath(import.meta.url), '..', '..')
const publicDir = path.join(root, 'public')

// Brand icon is supplied as a raster PNG (512x512). The spec's SVG branch
// doesn't apply — see WEBSITE_STACK.md §10.1.
const sourcePath = path.join(publicDir, 'favicon-source.png')

const pngSizes = [
  { file: 'favicon-32.png',       size: 32  },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png',         size: 192 },
  { file: 'icon-512.png',         size: 512 },
]

const source = await readFile(sourcePath)
for (const { file, size } of pngSizes) {
  await sharp(source).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(publicDir, file))
}
const ico = await pngToIco([path.join(publicDir, 'favicon-32.png')])
await writeFile(path.join(publicDir, 'favicon.ico'), ico)

console.log('Generated favicons in', publicDir)
