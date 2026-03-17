import React from "react";

function Team() {
  const teamMembers = [
    {
      name: "Secretary Name",
      role: "Secretary",
      image: "https://via.placeholder.com/120"
    },
    {
      name: "Joint Secretary",
      role: "Joint Secretary",
      image: "https://via.placeholder.com/120"
    },
    {
      name: "Member 1",
      role: "Technical Team",
      image: "https://via.placeholder.com/120"
    },
    {
      name: "Member 2",
      role: "Design Team",
      image: "https://via.placeholder.com/120"
    },
  ];

  return (
    <>
      <style>{`
        .team-section {
          padding: 60px 20px;
          background-color: #c0a7f7;
          text-align: center;
        }

        .team-title {
          font-size: 32px;
          margin-bottom: 40px;
          color: #222;
        }

        .team-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: auto;
        }

        .team-card {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
        }

        .team-card img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-bottom: 15px;
          object-fit: cover;
        }

        .team-card h3 {
          margin: 10px 0 5px;
          font-size: 18px;
          color: #333;
        }

        .team-card p {
          font-size: 14px;
          color: #666;
        }
      `}</style>

      <section className="team-section">
        <h2 className="team-title">Meet Our Team</h2>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Team;