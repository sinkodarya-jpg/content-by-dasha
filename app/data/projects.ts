export type GalleryItem = {
  type: "image" | "video";
  orientation: "vertical" | "horizontal";
  src: string;
  poster?: string;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  gallery: GalleryItem[];
};

export const projects: Record<string, Project> = {
  "samsung-serif": {
    title: "Samsung Serif TV",

    subtitle:
      "Lifestyle campaign featuring the Samsung Serif TV in a cozy Scandinavian home.",


    description:
      "A lifestyle campaign focused on integrating the Samsung Serif TV into a cozy Scandinavian interior through authentic everyday moments.",

    gallery: [
      {
        type: "image",
        orientation: "vertical",
        src: "/projects/samsung-serif/1.jpg",
      },
      {
        type: "image",
        orientation: "horizontal",
        src: "/projects/samsung-serif/2.jpg",
      },
      {
        type: "video",
        orientation: "vertical",
        src: "/projects/samsung-serif/video.mp4",
        poster: "/projects/samsung-serif/poster.jpg",
      },
    ],
  },
};