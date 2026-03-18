import React from "react";
import GridBackground from "../ui/GridBackground";
import hackImg from "./hack.jpg";
import ideaImg from "./idea.jpg";
import semiImg from "./semi.jpg";
const events = [
  {
    title: "Ideathon 6.0",
    img: ideaImg,
  },
  {
    title: "Semicolon 11.0",
    img: semiImg,
  },
  {
    title: "Hackathon 9.0",
    img: hackImg,
  },

];

function Events() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#020617] to-black py-20 px-6">

      {/* BACKGROUND */}
      <GridBackground />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* HEADING */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-cyan-400">Events</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Explore our flagship hackathons and competitions.
        </p>
      </div>

      {/* POSTER GRID */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {events.map((event, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition duration-300"
          >

            {/* IMAGE */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

            {/* CONTENT OVERLAY */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">

              <h3 className="text-xl font-semibold text-white mb-3">
                {event.title}
              </h3>

              <button className="w-fit px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium hover:scale-105 transition">
                Know More →
              </button>
            </div>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
              bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"></div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Events;