'use client'
import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname() || ''

    const isActive = (path: string, partialMatch: boolean = false) => {
        if (partialMatch) {
            return pathname.startsWith(path) ? styles.active : ''
        }
        return pathname === path ? styles.active : ''
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <p>Next Demo App</p>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><Link href="/" className={isActive('/')}>Home</Link></li>
                    <li><Link href="/static" className={isActive('/static')}>static</Link></li>
                    <li><Link href="/static/nested" className={isActive('/static/nested')}>nested</Link></li>
                    <li><Link href="/dynamic/1" className={isActive('/dynamic/', true)}>dynamic</Link></li>
                    <li><Link href="/users-client" className={isActive('/users-client')}>users-client</Link></li>
                    <li><Link href="/users-server" className={isActive('/users-server')}>users-server</Link></li>
                </ul>
            </nav>
        </header >
    )
}