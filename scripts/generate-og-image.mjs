import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(fileURLToPath(import.meta.url), '..', '..')
const publicDir = path.join(root, 'public')

const W = 1200
const H = 630
const BG = '#07070A'
const ACCENT = '#FFD400'

const icon = await readFile(path.join(publicDir, 'favicon-source.png'))
const iconResized = await sharp(icon).resize(220, 220, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()

const svgOverlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="60%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <g font-family="Manrope, Inter, system-ui, sans-serif" font-weight="800" text-anchor="middle">
    <text x="${W / 2}" y="${H / 2 + 60}" font-size="92" fill="#F4F4F7" letter-spacing="-3">
      zsapping<tspan fill="${ACCENT}">.net</tspan>
    </text>
    <text x="${W / 2}" y="${H / 2 + 130}" font-size="28" fill="#A5A5B2" font-weight="500" letter-spacing="1">
      Education and services for freedom tech
    </text>
  </g>
</svg>
`)

await sharp({
  create: { width: W, height: H, channels: 4, background: BG },
})
  .composite([
    { input: svgOverlay, top: 0, left: 0 },
    { input: iconResized, top: 100, left: Math.round((W - 220) / 2) },
  ])
  .webp({ quality: 90 })
  .toFile(path.join(publicDir, 'og-image.webp'))

console.log('Generated og-image.webp')
