import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const buffer = await readFile(join(process.cwd(), 'public', 'logo.png'))
  const src = `data:image/png;base64,${buffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          background: '#C6C7BD',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={size.width}
          height={size.height}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
    ),
    size
  )
}
