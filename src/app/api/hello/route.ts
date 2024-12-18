import { inngest } from '@/inngest/client'
import { NextResponse } from 'next/server'

// Opt out of caching; every request should send a new event
export const dynamic = 'force-dynamic'

// Create a simple async Next.js API route handler
export async function GET() {
    // Send your event payload to Inngest
    await inngest.send({
        name: 'test/hello.world',
        data: {
            email: 'testFromNext@example.com',
        },
    })

    return NextResponse.json({ name: 'Hello Inngest from Next!' })
}
