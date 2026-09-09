import { Clapperboard } from "lucide-react"
import styles from './Brand.module.css'

export default function Brand() {

    return (
        <div className={styles.brand}>
            <span className={styles.logoMark}><Clapperboard size={24} strokeWidth={1.5}/></span>
            <span className={styles.logoWord}>Movie<em>SP</em></span>
        </div>
    )
}