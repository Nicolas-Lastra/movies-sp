import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './Home.module.css'

gsap.registerPlugin(useGSAP)

const movieImages = [
    'https://xl.movieposterdb.com/26_05/2026/33764258/xl_the-odyssey-movie-poster_9167948e.jpeg',
    'https://posters.movieposterdb.com/26_06/2026/22084616/l_spider-man-brand-new-day-movie-poster_0b995234.jpg',
    'https://posters.movieposterdb.com/26_08/2026/1756855/l_coyote-vs-acme-movie-poster_7464a522.jpg',
    'https://posters.movieposterdb.com/26_06/0/34379051/l_-movie-poster_5499dcfb.jpg',
    'https://posters.movieposterdb.com/26_04/2026/32393988/l_insidious-out-of-the-further-movie-poster_efcb699d.jpeg',
    'https://posters.movieposterdb.com/14_09/2014/816692/l_816692_593eaeff.jpg'
]

export default function Home({ ref }) {
    useGSAP(() => {
        if(movieImages.length === 0) return

        gsap.to(`.${styles.carouselTrack}`, {
            xPercent: -50,
            duration: 35,
            ease: 'none',
            repeat: -1
        })
    }, { scope: ref })

    return (
        <section className={styles.hero} ref={ref}>
            {movieImages.length > 0 && (
                <div className={styles.heroCarousel} aria-hidden='true'>
                    <div className={styles.carouselTrack}>
                        <div className={styles.carouselGroup}>
                            {movieImages.map((image, index) => (
                                <img
                                    key={`first-${index}`}
                                    src={image}
                                    alt=''
                                    className={styles.carouselImage}
                                    draggable='false'
                                />
                            ))}
                        </div>

                        <div className={styles.carouselGroup}>
                            {movieImages.map((image, index) => (
                                <img
                                    key={`second-${index}`}
                                    src={image}
                                    alt=''
                                    className={styles.carouselImage}
                                    draggable='false'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <h1 className={styles.heroTitle}>
                The fastest way to <em>search</em> and <em>post</em> movies
            </h1>
        </section>
    )
}