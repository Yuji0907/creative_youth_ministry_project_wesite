import  "./page.css";
import HeroPage from "@/components/Hero_page/hero_page"
import ProjectOverview from "@/components/Project_Overview/project_overview"
export default function Home() {
  return (
  <main className="main_">
    <HeroPage/>
    <ProjectOverview/>

  </main>
  );
}
