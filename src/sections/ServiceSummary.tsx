import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

type Props = {};

gsap.registerPlugin(ScrollTrigger);

function ServiceSummary({}: Props) {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: -13,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: 12,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: -9,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: 9,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-20 overflow-hidden leading-snug text-center mb-42 text-4xl md:text-8xl">
      <div id="title-service-1">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="">Scalability</p>
        <div className="w-10 h-1 md:w:32 bg-gold"></div>
        <p>Frontend</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w:32 bg-gold"></div>
        <p className="italic">SEO</p>
        <div className="w-10 h-1 md:w:32 bg-gold"></div>
        <p>Cloud</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>Deployment</p>
      </div>
    </section>
  );
}

export default ServiceSummary;
