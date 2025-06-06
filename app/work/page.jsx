"use client";


import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import WorkSlidersBtn from "@/components/WorkSlidersBtn";




const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aperiam eaque! Ipsum perspiciatis illo tempora, nemo odit dolores minima, nesciunt modi accusamus maxime aspernatur exercitationem ipsa voluptate dolor fugiat dolorum!",
    stack: [
      {
        name: "HTML 5"
      },
      {
        name: "CSS 3"
      },
      {
        name: "Javascript"
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: ""
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 3',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aperiam eaque! Ipsum perspiciatis illo tempora, nemo odit dolores minima, nesciunt modi accusamus maxime aspernatur exercitationem ipsa voluptate dolor fugiat dolorum!",
    stack: [
      {
        name: "HTML 5"
      },
      {
        name: "CSS 3"
      },
      {
        name: "Javascript"
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""
  },
  {
    num: '03',
    category: 'backend',
    title: 'project 3',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aperiam eaque! Ipsum perspiciatis illo tempora, nemo odit dolores minima, nesciunt modi accusamus maxime aspernatur exercitationem ipsa voluptate dolor fugiat dolorum!",
    stack: [
      {
        name: "HTML 5"
      },
      {
        name: "CSS 3"
      },
      {
        name: "Javascript"
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: ""
  }
]
function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn'
        }
      }}

      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl-gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* Project desctiption */}
              <p className="text-white/60">{project.description}</p>

              {/* Stock */}
              <ul className="flex gap-4">
                {
                  project.stack.map((item, index) => (
                    <li key={index}
                      className="text-xl text-accent"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))
                }
              </ul>

              <div className="border border-white/20 ">
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>


                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <FaGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="relative xl-h-[520px] mb-15"
              onSlideChange={handleSlideChange}
            >
              {
                projects.map((item, index) => (
                  <SwiperSlide key={index} className="w-full mb-15" >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">

                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>

                      <div className="relative w-full h-full ">
                        <Image src={item.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }

              <WorkSlidersBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"

              />


            </Swiper>


          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work