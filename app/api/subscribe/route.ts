// app/api/subscribe/route.ts

import {sanityFetch} from '@/sanity/lib/live'
import {settingsQuery} from '@/sanity/lib/queries'
import {NextRequest, NextResponse} from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const {email, name, message} = await req.json()

    if (!email) {
      return NextResponse.json({error: 'Email is required'}, {status: 400})
    }

    const beehiivRes = await fetch(
      'https://api.beehiiv.com/v2/publications/pub_b712ecc6-1017-4385-808e-4b3c1f49c4ed/subscriptions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          custom_fields: [
            {name: 'name', value: name || ''},
            {name: 'message', value: message || ''},
          ],
        }),
      },
    )

    if (!beehiivRes.ok) {
      const errorData = await beehiivRes.json()
      return NextResponse.json({error: errorData}, {status: beehiivRes.status})
    }

    const data = await beehiivRes.json()

    // 2. Send email to admin if message exists
    if (message) {
      const {data} = await sanityFetch({query: settingsQuery})
      const adminEmails = data?.adminEmails?.map((email: {email: string}) => email?.email)

      if (adminEmails) {
        const sendMailRes = await fetch('https://esoftenv.com/culturiety-send-email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: adminEmails,
            subject: 'New Message from Contract Form',
            body: `
            <p><strong>Name:</strong> ${name || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
          }),
        })

        if (!sendMailRes.ok) {
          console.error('Failed to send admin email')
        }
      }
    }

    return NextResponse.json({success: true, data})
  } catch (error) {
    console.error('Subscribe API Error:', error)
    return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
  }
}
