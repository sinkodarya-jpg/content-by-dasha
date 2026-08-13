import Intro from './components/Intro'
import PhotoCard from './components/PhotoCard'
import ProjectCard from './components/ProjectCard'
import ShowcaseCard from './components/ShowcaseCard'
import styles from './page.module.scss'
import { homeProjects } from './data/homeProjects'

export default function Home() {
  return (
    <main className={styles.home}>
      <Intro/>
      <div className={styles.projectGrid}>{homeProjects.map((item, index) => {
        const numberedTitle = `(${index + 1}) ${item.title}`

        return (
          <div key={item.id}>
            {item.type === 'photo' ? (
              <PhotoCard
                id={item.id}
                title={numberedTitle}
                collageSrc={item.collageSrc}
                productImageSrc={item.productImageSrc}
                instagramUrl={item.instagramUrl}
              />
            ) : item.type === 'showcase' ? (
              <ShowcaseCard
  id={item.id}
  title={numberedTitle}
  videoSrc={item.videoSrc}
  productImageSrc={item.productImageSrc}
  overlaySrc={item.overlaySrc}
  instagramUrl={item.instagramUrl}
/>
            ) : (
              <ProjectCard
                id={item.id}
                title={numberedTitle}
                videoSrc={item.videoSrc}
                videoOrientation={item.videoOrientation}
                productImageSrc={item.productImageSrc}
                instagramUrl={item.instagramUrl}
              />
            )}
          </div>
        )
      })}
      </div>
    </main>
  )
}
