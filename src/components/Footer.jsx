import styles from './Footer.module.css'
import { Link } from 'react-router'
import Brand from './Brand'

export default function Footer() {

    return(
        <footer className={styles.footer}>
            <div>
                <Link to={'/'}>
                    <Brand />
                </Link>
            </div>

            <div className={styles.copy}>
                <p>© 2026 MovieSP</p>
                <p className={styles.copySeparator}>·</p>
                <p>All rights reserved</p>
            </div>

            <div className={styles.contact}>
                {/* WhatsApp */}
                <Link to='https://wa.me' target='_blank' className={styles.icon}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>
                </Link>

                {/* Mail */}
                <Link to='mailto:someone@example.com' target='_blank' className={styles.icon}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
                        <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
                        <path d="M16 4l-4 4l-4 -4" />
                        <path d="M4 6.5l8 7.5l8 -7.5" />
                    </svg>
                </Link>
            </div>
        </footer>
    )
}