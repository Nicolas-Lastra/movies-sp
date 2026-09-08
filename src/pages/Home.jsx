import styles from './Home.module.css'

export default function Home() {

    return (
        <>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>
                    The fastest way to <em>search</em> for a movie
                </h1>
            </section>
        </>
    )
}