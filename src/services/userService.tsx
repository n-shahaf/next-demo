import { User } from '@/types'

const userService = {
    getUsers: getUsers,
    getUserById: getUserById
}


export async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users: User[] = await response.json()
        return users
    } catch (error) {
        console.error('Error fetching users:', error)
        return null
    }
}

export async function getUserById(id: number) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user: User = await response.json()
        return user
    } catch (error) {
        console.error('Error fetching user by ID:', error)
        return null
    }
}

export default userService