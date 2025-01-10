import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'DevDotCom'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>DevDotCom</div>
        <div style={{ fontSize: '48px' }}>Coming Soon</div>
      </div>
    ),
    {
      ...size,
    }
  )
}

