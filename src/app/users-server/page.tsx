
import { getUsers } from '@/services/userService'

export default async function UsersServer() {
    const users = await getUsers()

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