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
    id: "lounge-by-zalando",
    title: "Lounge by Zalando",
    videoSrc: "/home-projects/lounge-by-zalando/video.mp4",
    videoOrientation: "vertical",
    productImageSrc: "/home-projects/lounge-by-zalando/product.png",
    instagramUrl: "https://www.instagram.com/p/DYPAXq7KnWy/?hl=en",
  },
  {
    type: "showcase",
    id: "furla-bag",
    title: "Furla Bag",
    videoSrc: "/home-projects/furla-bag/video.mp4",
    productImageSrc: "/home-projects/furla-bag/product.png",
    overlaySrc: "/home-projects/furla-bag/overlay.png",
    instagramUrl: "https://www.instagram.com/p/DWmQZOnDkKe",
  },
  {
    type: "photo",
    id: "gamin-shoes",
    title: "GAMIN Shoes",
    collageSrc: "/home-projects/gamin-shoes/collage.png",
    productImageSrc: "/home-projects/gamin-shoes/product.png",
    instagramUrl: "https://www.instagram.com/p/DXKLnJKDGZX/?hl=en&img_index=1",
  },
{
    type: "video",
    id: "not-just-pajama",
    title: "Not Just Pajama",
    videoSrc: "/home-projects/not-just-pajama/video.mp4",
    videoOrientation: "vertical",
    productImageSrc: "/home-projects/not-just-pajama/product.png",
    instagramUrl: "https://www.instagram.com/reel/DZeqo7iOIyf",
  },
  {
    type: "video",
    id: "moody-mumu-socks",
    title: "Moody MuMu Socks",
    videoSrc: "/home-projects/moody-mumu-socks/video.mp4",
    videoOrientation: "horizontal",
    productImageSrc: "/home-projects/moody-mumu-socks/product.png",
    instagramUrl: "https://www.instagram.com/p/DYKYx3kqHzv",
  },
  {
    type: "photo",
    id: "gina-tricot",
    title: "Gina Tricot",
    collageSrc: "/home-projects/gina-tricot/collage.png",
    productImageSrc: "/home-projects/gina-tricot/product.png",
    instagramUrl: "https://www.instagram.com/p/Daf_RhwDmNN/?hl=en&img_index=1",
  },
  {
    type: "video",
    id: "jw-pei",
    title: "JW Pei",
    videoSrc: "/home-projects/jw-pei/video.mp4",
    videoOrientation: "vertical",
    productImageSrc: "/home-projects/jw-pei/product.png",
    instagramUrl: "https://www.instagram.com/reel/DYSevYgO-zG",
  },

    {
    type: "video",
    id: "gina-tricot-2",
    title: "Gina Tricot",
    videoSrc: "/home-projects/gina-tricot-2/video.mp4",
    videoOrientation: "horizontal",
    productImageSrc: "/home-projects/gina-tricot-2/product.png",
  },
   {
    type: "video",
    id: "anua",
    title: "Anua",
    videoSrc: "/home-projects/anua/video.mp4",
    videoOrientation: "vertical",
    productImageSrc: "/home-projects/anua/product.png",
    instagramUrl: "https://www.instagram.com/reel/DbTTo7RKM9V/?hl=en",
  },
  {
    type: "showcase",
    id: "everyday-bars",
    title: "Everyday Bars",
    videoSrc: "/home-projects/everyday-bars/video.mp4",
    productImageSrc: "/home-projects/everyday-bars/product.png",
    overlaySrc: "/home-projects/everyday-bars/overlay.png",
  },
    {
    type: "video",
    id: "en route",
    title: "En Route",
    videoSrc: "/home-projects/en-route/video.mp4",
    videoOrientation: "vertical",
    productImageSrc: "/home-projects/en-route/product.png",
    instagramUrl: "https://www.instagram.com/reel/DZcs8ArK5aR/?hl=en",
  },
  {
    type: "showcase",
    id: "sudoku",
    title: "Get My Sudoku",
    videoSrc: "/home-projects/sudoku/video.mp4",
    productImageSrc: "/home-projects/sudoku/product.png",
    overlaySrc: "/home-projects/sudoku/overlay.png",
    instagramUrl: "https://www.instagram.com/p/DbME9sXOTl0/?hl=en",
  },
  {
    type: "video",
    id: "joocyee",
    title: "JOOCYEE",
    videoSrc: "/home-projects/joocyee/video.mp4",
    videoOrientation: "vertical",
    productImageSrc: "/home-projects/joocyee/product.png",
    instagramUrl: "https://www.instagram.com/reel/DYSevYgO-zG",
  },
];
