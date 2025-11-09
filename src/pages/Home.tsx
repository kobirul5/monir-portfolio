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
        <HeroSection/>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
    </div>
  )
}
