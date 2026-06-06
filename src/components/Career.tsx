import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Web Development Intern</h4>
                <h5>AICTE (in Collaboration With Edunet Foundation)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a 6-week Front-End Web Development internship. Developed responsive web applications using HTML, CSS, and JavaScript, and collaborated on real-world projects to deliver functional, modern solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science & Engineering</h4>
                <h5>AKTU</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Technology in Computer Science & Engineering. Actively strengthening foundational software engineering, algorithm design, and modern front-end engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Programming In Java</h4>
                <h5>NPTEL (Virtual)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed training on Java programming fundamentals. Strengthened object-oriented logic, data structures, and debugging processes to write efficient and robust code.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary (XII - CBSE Science)</h4>
                <h5>Govt Boys Sr. Sec. School, New Delhi</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Senior Secondary schooling with a science focus, achieving 60.00% overall.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
