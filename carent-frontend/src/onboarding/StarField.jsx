import React from "react";

const stars = [
  {
    color: "star-blue",
    top: "10%",
    left: "8%",
    animation: "shoot-ne",
    delay: "0s",
    duration: "2.8s",
  },
  {
    color: "star-cyan",
    top: "12%",
    left: "85%",
    animation: "shoot-sw",
    delay: "0.9s",
    duration: "3.4s",
  },
  {
    color: "star-pink",
    top: "18%",
    left: "45%",
    animation: "shoot-nw",
    delay: "1.2s",
    duration: "3s",
  },
  {
    color: "star-violet",
    top: "55%",
    left: "25%",
    animation: "shoot-se",
    delay: "0.4s",
    duration: "3.5s",
  },
  {
    color: "star-amber",
    top: "65%",
    left: "80%",
    animation: "shoot-nw",
    delay: "1s",
    duration: "2.6s",
  },
  {
    color: "star-teal",
    top: "72%",
    left: "18%",
    animation: "shoot-ne",
    delay: "0.5s",
    duration: "3.1s",
  },
  {
    color: "star-blue",
    top: "5%",
    left: "55%",
    animation: "shoot-se",
    delay: "0.3s",
    duration: "2.5s",
  },
  {
    color: "star-cyan",
    top: "30%",
    left: "12%",
    animation: "shoot-sw",
    delay: "1.1s",
    duration: "3.3s",
  },
  {
    color: "star-pink",
    top: "40%",
    left: "90%",
    animation: "shoot-nw",
    delay: "0.6s",
    duration: "3.2s",
  },
  {
    color: "star-violet",
    top: "85%",
    left: "30%",
    animation: "shoot-ne",
    delay: "0.8s",
    duration: "2.9s",
  },
  {
    color: "star-amber",
    top: "18%",
    left: "30%",
    animation: "shoot-se",
    delay: "0.2s",
    duration: "3.6s",
  },
  {
    color: "star-teal",
    top: "50%",
    left: "95%",
    animation: "shoot-sw",
    delay: "1.4s",
    duration: "3.8s",
  },
  {
    color: "star-blue",
    top: "10%",
    left: "8%",
    animation: "shoot-ne",
    delay: "0s",
    duration: "2.8s",
  },
  {
    color: "star-cyan",
    top: "12%",
    left: "85%",
    animation: "shoot-sw",
    delay: "0.9s",
    duration: "3.4s",
  },
  {
    color: "star-pink",
    top: "18%",
    left: "45%",
    animation: "shoot-nw",
    delay: "1.2s",
    duration: "3s",
  },
  {
    color: "star-violet",
    top: "55%",
    left: "25%",
    animation: "shoot-se",
    delay: "0.4s",
    duration: "3.5s",
  },
  {
    color: "star-amber",
    top: "65%",
    left: "80%",
    animation: "shoot-nw",
    delay: "1s",
    duration: "2.6s",
  },
  {
    color: "star-teal",
    top: "72%",
    left: "18%",
    animation: "shoot-ne",
    delay: "0.5s",
    duration: "3.1s",
  },
  {
    color: "star-blue",
    top: "5%",
    left: "55%",
    animation: "shoot-se",
    delay: "0.3s",
    duration: "2.5s",
  },
  {
    color: "star-cyan",
    top: "30%",
    left: "12%",
    animation: "shoot-sw",
    delay: "1.1s",
    duration: "3.3s",
  },
  {
    color: "star-pink",
    top: "40%",
    left: "90%",
    animation: "shoot-nw",
    delay: "0.6s",
    duration: "3.2s",
  },
  {
    color: "star-violet",
    top: "85%",
    left: "30%",
    animation: "shoot-ne",
    delay: "0.8s",
    duration: "2.9s",
  },
  {
    color: "star-amber",
    top: "18%",
    left: "30%",
    animation: "shoot-se",
    delay: "0.2s",
    duration: "3.6s",
  },
  {
    color: "star-teal",
    top: "50%",
    left: "95%",
    animation: "shoot-sw",
    delay: "1.4s",
    duration: "3.8s",
  },
];

export default function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className={`star ${star.color} ${star.animation}`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
