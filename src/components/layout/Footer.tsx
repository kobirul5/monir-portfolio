// import Logo from "@/assets/icons/Logo";
import FotterImg from "@/assets/images/fotter.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      // className="relative  rounded-b-3xl overflow-hidden text-foreground"
      className="relative bg-cover bg-center bg-no-repeat py-16 rounded-b-3xl overflow-hidden"
      style={{
        backgroundImage:
          `url(${FotterImg})`,
      }}
    >

      {/* Content Container */}
      <div className="container mx-auto px-6 py-16">
        {/* <div className="">
          <Logo />
        </div> */}
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-border pb-10">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">
              LET’S WORK TOGETHER!
            </h2>
            <p className="text-muted-foreground text-base xl:text-[24px] mb-6 max-w[600px]">
              Feel free to reach out for a project, collaboration, or just a quick hello.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 text-sm text-muted-foreground">
              {["Behance", "Dribbble", "LinkedIn", "Facebook"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <Button
            size="lg"
            className="flex items-center gap-2 px-6 py-5 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/80"
          >
            Send me Messages <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-muted-foreground">
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="#about" className="hover:text-primary transition-colors">
              About Me
            </a>
            <a href="#work" className="hover:text-primary transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <a
            href="mailto:mortensulva@gmail.com"
            className="hover:text-primary transition-colors"
          >
            mortensulva@gmail.com
          </a>
        </div>
      </div>

      {/* Background Logo Section (optional if you want your original Logo) */}

    </footer>
  );
}
