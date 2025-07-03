import React, { useRef } from "react";
import Marque from "../components/Marque";

type Props = {};

function ContactSummary({}: Props) {
  const containerRef = useRef(null);
  const items1 = ["inovation", "creativity", "passion", "dedication","precision", "collaboration"];
  const items2 = ["contact us", "contact us", "contact us", "contact us"];

  
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12"
    >
        <Marque items={items1} />
      {/* Marguee */}
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "Lets build a <br />
          <span className="font-normal">memorable</span> & <span className="italic">inspiring</span> <br /> web application{" "}
          <span className="text-yellow-600">together</span>"
        </p>
      </div>
      {/* Marquee */}
      <Marque items={items2} reverse={true} className="text-black bg-amber-100" />
    </section>
  );
}

export default ContactSummary;
