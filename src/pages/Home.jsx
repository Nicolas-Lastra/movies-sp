import styles from './Home.module.css'

export default function Home() {

    return (
        <>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>
                    The fastest way to <em>search</em> and <em>post</em> movies
                </h1>
            </section>
        </>
    )
}