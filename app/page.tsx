import PhotoCard from './components/PhotoCard'
import ProjectCard from './components/ProjectCard'
import ShowcaseCard from './components/ShowcaseCard'
import styles from './page.module.scss'
import { homeProjects } from './data/homeProjects'
import FinderWindow from './components/test'

export default function Home() {
  return (
    
    <main className={styles.home}>
            <FinderWindow />

      <div className={styles.projectGrid}>{homeProjects.map((item) => (
        <div key={item.id}>
          {item.type === 'photo' ? (
            <PhotoCard
              id={item.id}
              title={item.title}
              collageSrc={item.collageSrc}
              productImageSrc={item.productImageSrc}
              instagramUrl={item.instagramUrl}
            />
          ) : item.type === 'showcase' ? (
            <ShowcaseCard
              id={item.id}
              title={item.title}
              videoSrc={item.videoSrc}
              productImageSrc={item.productImageSrc}
              overlaySrc={item.overlaySrc}
              instagramUrl={item.instagramUrl}
            />
          ) : (
            <ProjectCard
              id={item.id}
              title={item.title}
              videoSrc={item.videoSrc}
              videoOrientation={item.videoOrientation}
              productImageSrc={item.productImageSrc}
              instagramUrl={item.instagramUrl}
            />
          )}
        </div>
      ))}
      </div>
    </main>
  )
}
