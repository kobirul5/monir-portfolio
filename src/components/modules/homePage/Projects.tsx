
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects } from "@/assets/data/projects";
import { Link } from "react-router"; // React Router v6

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  github_client?: string;
  github_server?: string;
  rowSet?: boolean; // controls layout
}

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] container mx-auto flex flex-col justify-center py-12 px-5 lg:py-0"
    >
      {projects?.map((p: Project, idx: number) => (
        <div
          key={idx}
          className={`flex flex-col my-10 ${p?.rowSet ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-8`}
        >
          {/* Project details */}
          <motion.div className="w-full lg:w-1/2 lg:h-[468px] order-2 lg:order-none">
            <div className="flex flex-col gap-6">
              {/* <div className="text-8xl leading-none text-foreground text-outline outline-foreground font-extrabold ">
                0{p?.id}
              </div> */}
              <h1 className="text-3xl xl:text-[48px] font-bold">{p?.title}</h1>
              <p className="text-xl">{p?.description}</p>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live link */}
                {p.link && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="border  p-2 px-5 rounded-3xl flex justify-center items-center group"
                        asChild
                      >
                        <Link to={p.link} target="_blank" rel="noopener noreferrer">
                          <BsArrowUpRight className="mr-2" />
                          Live
                        </Link>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                )}

                {/* GitHub client */}
                {p.github_client && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5 rounded-3xl flex justify-center items-center group"
                        asChild
                      >
                        <Link to={p.github_client} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="mr-2" />
                          Client
                        </Link>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                )}

                {/* GitHub server */}
                {p.github_server && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5 rounded-3xl flex justify-center items-center group"
                        asChild
                      >
                        <Link to={p.github_server} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="mr-2" />
                          Server
                        </Link>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          </motion.div>

          {/* Project image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
            className="lg:w-1/2 z-10"
          >
            <ScrollArea className="h-[375px] overflow-y-auto rounded-2xl" >
              <div className="relative w-full">
                <img
                  src={p.image}
                  alt={p.title || "project"}
                  width={800}
                  height={1500}
                  className="object-cover w-full"
                />
              </div>
            </ScrollArea>
          </motion.div>
        </div>
      ))}
    </motion.section>
  );
}
