
import { Button } from "@/components/ui/button";
import Img1 from '../../../assets/images/about/m1.png';
import Img2 from '../../../assets/images/about/m2.png';
import Img3 from '../../../assets/images/about/m3.png';

export default function AboutMe() {
  return (
    <section className="  pb-16 px-6 container mx-auto">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold  mb-2">About Me</h2>
        <p className="text-muted-foreground">
          Creating brands that connect and inspire.
        </p>
      </div>

      {/* Image cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[`${Img1}`, `${Img2}`, `${Img3}`].map((src, i) => (
          <div
            key={i}
            className="overflow-hidden bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all"
          >

              <img
                src={src}
                alt={`about-${i + 1}`}
                className="w-full  object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
        ))}
      </div>

      {/* Text section */}
      <div className=" mx-auto text-[20px] leading-relaxed space-y-4 text-muted-foreground">
        <p>
          Hi, I’m <span className="text-primary font-semibold">Md Monirul Islam</span>, a passionate
          UI/UX Designer with a strong focus on creating modern, clean, and user-friendly digital
          experiences. I specialize in designing websites and interfaces using Figma, where I bring
          ideas to life through creative design and problem-solving.
          My goal is to make every project both visually appealing and highly functional so users can
          enjoy a smooth and meaningful experience.
        </p>

        <p>
          When working on projects, I follow a clear design process: starting with research and
          understanding client goals, then moving to wireframes, high-fidelity design, prototyping,
          and iteration based on feedback. This approach helps me deliver designs that balance
          creativity with usability. I believe good design is not just how it looks but how it works.
        </p>

        <Button variant="link" className="text-primary p-0">
          Read More
        </Button>
      </div>
    </section>
  );
}
