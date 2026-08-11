import { notFound } from "next/navigation";

import { projects } from "@/app/data/projects";

import ProjectHero from "@/app/components/ProjectHero";
import ProjectGallery from "@/app/components/ProjectGallery";
import styles from "./page.module.scss";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.projectPage}>
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
      />

      <ProjectGallery items={project.gallery} />

      <section className={styles.projectAbout}>
        <h2>About</h2>

        <p>{project.description}</p>
      </section>
    </main>
  );
}
