
import { User } from '@/types'

const data = await fetch('https://jsonplaceholder.typicode.com/users')
const users: User[] = await data.json()

export default function UsersServer() {

    if (!users) return <div>Error: No users found</div>
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