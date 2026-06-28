import Intro from './components/Intro'
import PhotoCard from './components/PhotoCard'
import ProjectCard from './components/ProjectCard'
import ShowcaseCard from './components/ShowcaseCard'

const items = [
  {
    type: 'video' as const,
    id: 'project-1',
    title: '(1) Not Just Pajama',
    videoSrc: '/videos/v-1.mp4',
    videoOrientation: 'vertical' as const,
    productImageSrc: '/images/products/p-1.png',
    instagramUrl: 'https://instagram.com',
  },
  {
    type: 'photo' as const,
    id: 'gamin-shoes',
    title: '(2) GAMIN Shoes',
    collageSrc: '/images/collages/c-1.png',
    productImageSrc: '/images/products/p-2.png',
    instagramUrl: 'https://instagram.com',
  },
  {
  type: 'showcase' as const,
  id: 'project-3',
  title: '(3) Furla Bag',
  videoSrc: '/videos/v-3.mp4',
    productImageSrc: '/images/products/p-3.png',
  overlaySrc: '/images/video-collages/vc-1.png',
  instagramUrl: 'https://instagram.com',
},
  {
    type: 'video' as const,
    id: 'project-4',
    title: '(4) Not Just Pajama',
    videoSrc: '/videos/v-1.mp4',
    videoOrientation: 'vertical' as const,
    productImageSrc: '/images/i-1.png',
  },
  {
    type: 'video' as const,
    id: 'project-5',
    title: '(5) Moody MuMu Socks',
    videoSrc: '/videos/v-2.mp4',
    videoOrientation: 'horizontal' as const,
    productImageSrc: '/images/i-2.png',
    instagramUrl: 'https://instagram.com',
  },
  {
    type: 'photo' as const,
    id: 'gamin-shoes-2',
    title: '(6) GAMIN Shoes',
    collageSrc: '/images/i-5.png',
    productImageSrc: '/images/i-4.png',
  },
]

export default function Home() {
  return (
    <main className="py-8">
      <Intro/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16 items-start">
        {items.map((item) => (
          <div key={item.id}>
            {item.type === 'photo' ? (
              <PhotoCard
                id={item.id}
                title={item.title}
                collageSrc={item.collageSrc!}
                productImageSrc={item.productImageSrc}
                instagramUrl={item.instagramUrl}
              />
            ) : item.type === 'showcase' ? (
              <ShowcaseCard
  id={item.id}
  title={item.title}
  videoSrc={item.videoSrc!}
  productImageSrc={item.productImageSrc}
  overlaySrc={item.overlaySrc!}
  instagramUrl={item.instagramUrl}
/>
            ) : (
              <ProjectCard
                id={item.id}
                title={item.title}
                videoSrc={item.videoSrc!}
                videoOrientation={item.videoOrientation!}
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