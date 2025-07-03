import { useState } from "react";
import { Icon } from "@iconify/react";
import { contactInfo } from "../constants";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = contactInfo.resumeUrl;
    link.download = "Om_Bdvche_Resume.pdf";
    link.click();
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: contactInfo.linkedin,
      icon: "mdi:linkedin",
      color: "from-stone-400 to-zinc-400",
      hoverColor: "hover:from-stone-500 hover:to-zinc-500",
      bgColor: "bg-stone-400/10",
    },
    {
      name: "GitHub",
      url: contactInfo.github,
      icon: "mdi:github",
      color: "from-gray-400 to-zinc-500",
      hoverColor: "hover:from-gray-500 hover:to-zinc-600",
      bgColor: "bg-gray-400/10",
    },
    {
      name: "Instagram",
      url: contactInfo.instagram,
      icon: "mdi:instagram",
      color: "from-neutral-400 to-stone-500",
      hoverColor: "hover:from-neutral-500 hover:to-stone-600",
      bgColor: "bg-gradient-to-r from-neutral-400/10 to-stone-400/10",
    },
  ];

  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-stone-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-zinc-300/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-neutral-300/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gray-400/8 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-stone-300/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        {/* Header - Compact */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-100 mb-3">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-300 via-zinc-300 to-neutral-300 animate-pulse">
              Connect
            </span>
          </h2>
          <p className="text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
            Open to new opportunities and collaborations
          </p>
        </div>

        {/* Main Content Grid - Optimized spacing */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Email Section */}
          <div
            className="group relative p-6 rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
            onClick={handleCopyEmail}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-400/20 via-zinc-400/20 to-neutral-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-200/15 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-stone-400/15 to-zinc-400/15 group-hover:from-stone-400/25 group-hover:to-zinc-400/25 transition-all duration-300">
                  <Icon icon="mdi:email" className="w-8 h-8 text-stone-200" />
                </div>
                <div className="p-2 rounded-lg bg-stone-300/10 group-hover:bg-stone-300/20 transition-all duration-300">
                  {copiedEmail ? (
                    <Icon icon="mdi:check" className="w-5 h-5 text-green-400" />
                  ) : (
                    <Icon icon="mdi:content-copy" className="w-5 h-5 text-stone-200" />
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-stone-100 mb-2">
                Email
              </h3>
              <p className="text-stone-300 text-base font-mono break-all">
                {contactInfo.email}
              </p>
              <p className="text-stone-400 text-sm mt-2">Click to copy</p>
            </div>
          </div>

          {/* Resume Download Section */}
          <div
            className="group relative p-6 rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
            onClick={handleDownloadResume}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-400/20 via-gray-400/20 to-stone-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-200/15 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-zinc-400/15 to-gray-400/15 group-hover:from-zinc-400/25 group-hover:to-gray-400/25 transition-all duration-300">
                  <Icon icon="mdi:download" className="w-8 h-8 text-stone-200" />
                </div>
                <div className="p-2 rounded-lg bg-stone-300/10 group-hover:bg-stone-300/20 transition-all duration-300">
                  <Icon icon="mdi:open-in-new" className="w-5 h-5 text-stone-200" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-stone-100 mb-2">
                Resume
              </h3>
              <p className="text-stone-300 text-base">Download my latest CV</p>
              <p className="text-stone-400 text-sm mt-2">PDF format</p>
            </div>
          </div>
        </div>

        {/* Social Media Links - Compact */}
        <div className="grid md:grid-cols-3 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse`}></div>
              
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200/15 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-full ${social.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={social.icon} className="w-7 h-7 text-stone-200" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-stone-100 mb-2">
                  {social.name}
                </h3>
                <p className="text-stone-400 text-sm flex items-center justify-center gap-2">
                  Visit Profile
                  <Icon icon="mdi:open-in-new" className="w-4 h-4" />
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Message - Compact */}
        <div className="text-center mt-8">
          <p className="text-stone-400 text-base flex items-center justify-center gap-2">
            Looking forward to hearing from you! 
            <Icon icon="mdi:rocket" className="w-5 h-5 text-stone-300 animate-bounce" />
          </p>
        </div>
      </div>

      {/* Subtle gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Contact;