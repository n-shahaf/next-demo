// This file is a Next.js API route that handles GET requests to the /api/users endpoint.
// fetch users data from https://jsonplaceholder.typicode.com/users
import { User } from '@/types'
export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()
    return Response.json(users)
}
