// This file is a Next.js API route that handles GET requests to the /api/users/:id endpoint.
import { User } from '@/types'

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user: User = await res.json()
    return Response.json(user)
}