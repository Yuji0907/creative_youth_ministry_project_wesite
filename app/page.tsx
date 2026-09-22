import Image from "next/image";
import gridImage from "@/public/assets/grid png white background transparent_21045126 copy 2.png";
import  "./page.css";
import HeroPage from "@/components/Hero_page/hero_page"
import ProjectOverview from "@/components/Project_Overview/project_overview"
export default function Home() {
  return (
  <main className="main_">
    <Image
          className="grid-image g-01"
          src={gridImage}
          alt="sads"
    />
    <Image
        className="grid-image g-02"
        src={gridImage}
        alt="sads"
        />
    <HeroPage/>
    <ProjectOverview/>
  </main>
  );
}
