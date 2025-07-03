import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {techStackData} from "../constants"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface TechStackData {
  [key: string]: string; // stackName: imageURL
}

interface TechStackProps {
  techData: TechStackData;
}

const TechStack = ({ techData=techStackData }: TechStackProps) => {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);
  const column4Ref = useRef<HTMLDivElement>(null);

  const columnRefs = [column1Ref, column2Ref, column3Ref, column4Ref];

  // Convert techData to array and distribute across columns
  const techArray = Object.entries(techData);
  const columns = [[], [], [], []] as Array<Array<[string, string]>>;
  
  // Distribute tech items across 4 columns
  techArray.forEach((item, index) => {
    columns[index % 4].push(item);
  });

  useLayoutEffect(() => {
    const timelines: gsap.core.Timeline[] = [];
    
    columnRefs.forEach((ref, columnIndex) => {
      const items = ref.current?.querySelectorAll(".item") || [];
      
      // Clone items 3 times for smooth looping
      for (let i = 0; i < 3; i++) {
        const clone = items[0].cloneNode(true);
        ref.current?.appendChild(clone);
      }

      const itemHeight = items[0]?.clientHeight || 0;

      // Initial setup
      gsap.set(ref.current, {
        marginTop: -itemHeight,
      });

      const mod = gsap.utils.wrap(0, itemHeight);
      
      // Alternate direction for each column
      const direction = columnIndex % 2 === 0 ? "+=" + itemHeight : "-=" + itemHeight;

      function marquee(selector: HTMLElement, time: number, direction: string) {
        return gsap.to(selector, {
          duration: time,
          ease: "none",
          y: direction,
          modifiers: {
            y: (y) => mod(parseFloat(y)) + "px",
          },
          repeat: -1,
        });
      }

      const timeline = gsap.timeline();
      timeline.add(marquee(ref.current as HTMLElement, 10, direction), 0);
      timelines.push(timeline);
    });

    // Create master timeline
    const master = gsap.timeline();
    timelines.forEach((timeline) => {
      master.add(timeline, 0);
    });

    const tween = gsap.to(master, {
      duration: 1.5,
      timeScale: 1,
      paused: true,
    });
    
    const timeScaleClamp = gsap.utils.clamp(1, 6);

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (master) {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        }
      },
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      master?.kill();
      tween?.kill();
      timelines.forEach((timeline) => timeline.kill());
    };
  }, [techData]);

  return (
    <section className="h-[1000px] flex justify-center overflow-hidden w-full relative bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-zinc-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neutral-300/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
      
      <div className="flex w-full max-w-[1200px] gap-6 relative z-10">
        {columnRefs.map((ref, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            ref={ref}
            className={`flex-1 box column-${columnIndex + 1}`}
          >
            <div className="item pb-[20px]">
              {columns[columnIndex].map(([stackName, imageURL], index) => (
                <div
                  key={`${stackName}-${index}`}
                  className="item_child w-full h-[180px] flex flex-col justify-center items-center text-stone-200 text-[14px] font-medium mb-[20px] p-4 relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(245, 245, 244, 0.08)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(245, 245, 244, 0.15)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-200/15 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-stone-300/30 via-zinc-300/30 to-neutral-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '1px' }}>
                    <div className="w-full h-full rounded-2xl" style={{ background: 'rgba(245, 245, 244, 0.08)', backdropFilter: 'blur(12px)' }}></div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 mb-3 relative">
                      <img
                        src={imageURL}
                        alt={stackName}
                        className="w-full h-full object-contain drop-shadow-lg filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-16 h-16 bg-gradient-to-br from-stone-500 to-zinc-600 rounded-xl flex items-center justify-center text-stone-100 font-bold text-xl shadow-lg';
                          fallback.textContent = stackName.charAt(0).toUpperCase();
                          target.parentNode?.insertBefore(fallback, target);
                        }}
                      />
                      {/* Glow effect behind icon */}
                      <div className="absolute inset-0 bg-gradient-to-r from-stone-400/20 to-zinc-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                    
                    <span className="text-center capitalize font-semibold text-stone-200/90 group-hover:text-stone-100 transition-colors duration-300 tracking-wide">
                      {stackName}
                    </span>
                    
                    {/* Subtle bottom accent */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-stone-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Subtle gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default TechStack;