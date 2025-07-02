import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Robot from "../components/Robot";
import { projects } from "../constants";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {};

function Work({}: Props) {
  const text = `Featured projects that have been crafted with passion to drive results and impact.`;
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const moveX = useRef(null);
  const moveY = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2.5,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  });

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
    gsap.to(previewRef, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
    gsap.to(previewRef, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e: any) => {
    if (window.innerWidth < 768) return;
    mouse.current = { x: e.clientX + 60, y: e.clientY + 60 };
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        title="Work"
        description={text}
        subtitle="From notebook to production"
        textColor="text-gray-900"
        withScrollTrigger={true}
      />
      <div className="flex flex-row justify-between items-stretch flex-1">
        <div
          className="relative flex flex-col font-light w-1/2 flex-1"
          onMouseMove={() => handleMouseMove(event)}
        >
          {projects.map((project, index: number) => (
            <div
              key={project.id}
              id="project"
              className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            >
              {/* Title */}
              <div className="flex justify-between px-10 text-gray-700 transition-all duration-200 md:group-hover:px-15 md:group-hover:text-black">
                <h2
                  className="lg:text-[32px] text-[26px] leading-none"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {project.name}
                </h2>
                <Icon
                  icon="icon-park:arrow-right-up"
                  className="md:size-6 size-5"
                />
              </div>
              {/* Divider */}
              <div className="w-full h-0.5 bg-gray-400 mt-2" />
              {/* frameworks */}
              <div className="flex px-10 text-sm leading-loose uppercase transition-all duration-500 md:text:sm gap-x-5 md:group-hover:px-12">
                {project.frameworks.map(
                  (framework: { id: string; name: string }) => (
                    <p
                      key={framework.id}
                      className="text-gray-700 transition-colors duration-300 md:group-hover:text-black"
                    >
                      {framework.name}
                    </p>
                  )
                )}
              </div>
              <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
                <img
                  src={project.bgImage}
                  alt={`${project.name}-bgImage`}
                  className="object-cover w-full h-full rounded-md brightness-50"
                />
                <img
                  src={project.image}
                  alt={`${project.name}-image`}
                  className="absolute bg-center px-14 rounded-xl"
                />
              </div>
            </div>
          ))}

          {/* Desktop preview image */}
          <div
            ref={previewRef}
            className="fixed left-0 -top-0  z-50 overflow-hidden pointer-events-none w-[560px] md:block hidden"
          >
            {currentIndex !== null && (
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].name}
                className="object-cover"
              />
            )}
          </div>
        </div>
        {/* mobile preview image */}

        {!isMobile && (
          <div className="flex flex-col flex-1">
            <Robot />
          </div>
        )}
      </div>
    </section>
  );
}

export default Work;
