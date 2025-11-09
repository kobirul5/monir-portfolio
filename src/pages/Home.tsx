import AboutMe from "@/components/modules/homePage/AboutMe";
import { ContactMe } from "@/components/modules/homePage/ContactMe";
import HeroSection from "@/components/modules/homePage/HeroSection";
import Projects from "@/components/modules/homePage/Projects";
import HomeBg from "@/assets/images/Home.png";

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage:
          `url(${HomeBg})`,
      }}
    >
      <div className="relative">
        <div className="z-0">
          <HeroSection />
        </div>
        <div className="absolute align-middle top-[32rem]   xl:top-[32rem] x inset-0 w-full h-[100px] bg-gradient-to-b from-primary/80 to-black blur-[25px] z-10"></div>


      </div>
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}
