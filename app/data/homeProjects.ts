export type HomeProject =
  | {
      type: "video";
      id: string;
      title: string;
      videoSrc: string;
      videoOrientation: "vertical" | "horizontal";
      productImageSrc: string;
      instagramUrl?: string;
    }
  | {
      type: "photo";
      id: string;
      title: string;
      collageSrc: string;
      productImageSrc: string;
      instagramUrl?: string;
    }
  | {
      type: "showcase";
      id: string;
      title: string;
      videoSrc: string;
      productImageSrc: string;
      overlaySrc: string;
      instagramUrl?: string;
    };

export const homeProjects: HomeProject[] = [
  {
    type: "video",
    id: "not-just-pajama",
    title: "(1) Not Just Pajama",
    videoSrc: "/home-projects/not-just-pajama/video.mp4",
    videoOrientation: "vertical",
    productImageSrc: "/home-projects/not-just-pajama/product.png",
    instagramUrl: "https://www.instagram.com/reel/DZeqo7iOIyf",
  },
  {
    type: "photo",
    id: "gamin-shoes",
    title: "(2) GAMIN Shoes",
    collageSrc: "/home-projects/gamin-shoes/collage.png",
    productImageSrc: "/home-projects/gamin-shoes/product.png",
    instagramUrl: "https://www.instagram.com/p/DXKLnJKDGZX/?hl=en&img_index=1",
  },
  {
    type: "showcase",
    id: "furla-bag",
    title: "(3) Furla Bag",
    videoSrc: "/home-projects/furla-bag/video.mp4",
    productImageSrc: "/home-projects/furla-bag/product.png",
    overlaySrc: "/home-projects/furla-bag/overlay.png",
    instagramUrl: "https://www.instagram.com/p/DWmQZOnDkKe",
  },
  {
    type: "video",
    id: "moody-mumu-socks",
    title: "(4) Moody MuMu Socks",
    videoSrc: "/home-projects/moody-mumu-socks/video.mp4",
    videoOrientation: "horizontal",
    productImageSrc: "/home-projects/moody-mumu-socks/product.png",
    instagramUrl: "https://www.instagram.com/p/DYKYx3kqHzv",
  },
  {
    type: "video",
    id: "jw-pei",
    title: "(5) JW Pei",
    videoSrc: "/home-projects/jw-pei/video.mp4",
    videoOrientation: "vertical",
    productImageSrc: "/home-projects/jw-pei/product.png",
    instagramUrl: "https://www.instagram.com/reel/DYSevYgO-zG",
  },
  {
    type: "photo",
    id: "gina-tricot",
    title: "(6) Gina Tricot",
    collageSrc: "/home-projects/gina-tricot/collage.png",
    productImageSrc: "/home-projects/gina-tricot/product.png",
    instagramUrl: "https://www.instagram.com/p/DXKLnJKDGZX/?hl=en&img_index=1",
  },
  
];
