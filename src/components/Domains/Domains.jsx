import React from "react";

function Domains() {
  return (
    <>
      <style>{`
        .domains {
          min-height: 100vh;
          padding: 4rem 2rem;
          background-color: #c0a7f7;
          text-align: center;
        }

        .domains h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }

        .domains-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .domain-card {
          padding: 1.8rem;
          background-color: #101010;
          border-radius: 10px;
          font-weight: 500;
          color: white;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .domain-card:hover {
          transform: translateY(-6px);
        }
      `}</style>

      <section id="domains" className="domains">
        <h2>Our Domains</h2>

        <div className="domains-container">
          <div className="domain-card">Web Development</div>
          <div className="domain-card">App Development</div>
          <div className="domain-card">AI / ML</div>
          <div className="domain-card">UI / UX Design</div>
          <div className="domain-card">Blockchain</div>
          <div className="domain-card">Cyber Security</div>
        </div>
      </section>
    </>
  );
}

export default Domains;