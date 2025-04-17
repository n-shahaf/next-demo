'use client'
import { User } from '@/types'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())
const url = 'https://jsonplaceholder.typicode.com/users'

export default function UsersClient() {
    const { data: users, error, isLoading } = useSWR<User[]>(url, fetcher)


    if (isLoading) return <div>Loading...</div>
    if (error || !users) return <div>Error: {error.message}</div>
    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}