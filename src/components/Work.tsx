import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "RetroSnap",
    category: "Web App / Vintage AI Photo Booth",
    tools: "React, CSS, JavaScript, Generative AI Suggestions",
    image: "/images/retrosnap.png",
    link: "https://retro-snap-nine.vercel.app/",
  },
  {
    name: "Travel Explorer",
    category: "Modern Travel Site & Weather App",
    tools: "HTML, CSS, JavaScript, Unsplash API, OpenWeatherMap API",
    image: "/images/travel_explorer.png",
    link: "https://shivam-k3.github.io/Travel-Explorer-Website/",
  },
  {
    name: "HDB Loans Portal",
    category: "Lead Generation Website",
    tools: "HTML5, CSS3, Git, WhatsApp Contact, Google Translate API, Netlify",
    image: "/images/hdb_loans.png",
    link: "https://loanaplication.netlify.app/",
  },
];

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return 0;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      const val = rect.width * box.length - (rectLeft + parentWidth) + padding;
      return Math.max(0, val);
    };

    const xVal = getTranslateX();
    if (xVal <= 0) return; // Skip horizontal pinning if everything fits on the screen

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${Math.max(getTranslateX() * 2, window.innerHeight * 1.2)}`, // Extend pinning duration
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
