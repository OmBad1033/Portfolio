import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedTextLines from "./AnimatedTextLines";

type Props = {
  subtitle: string;
  title: string;
  textColor: string;
  description: string;
  withScrollTrigger?: boolean;
};

const AnimatedHeaderSection = (props: Props) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: props.withScrollTrigger ? { trigger: contextRef.current } : null,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 2,
        ease: "circ.out",
      },
      "<+1.2"
    );
  }, []);
  return (
    <div ref={contextRef}>
      <div
        className="border-t-1"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm-gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${props.textColor}`}
          >
            {props.subtitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col flex-wrap banner-text-responsive text-5xl md:text-7xl lg:text-8xl gap-12 ${props.textColor} uppercase sm:gap-16 md:block`}
            >
              {props.title}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${props.textColor}`}>
        <div className="insert-x-0 border-t-2" />
        <div className="py-12 sm-py-16 text-end">
          <AnimatedTextLines
            text={props.description}
            classname="font-light uppercase value-text-responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
