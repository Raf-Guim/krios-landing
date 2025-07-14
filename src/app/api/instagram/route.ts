import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts')
    }

    const data = await response.json()
    return NextResponse.json(data.data)
  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    return NextResponse.json({ error: 'Failed to fetch Instagram posts' }, { status: 500 })
  }
}
