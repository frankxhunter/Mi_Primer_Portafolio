import Particles from "particlesjs"
import "./BackgroundParticles.css"

export function BackgroundParticles() {

  window.onload = function () {
    Particles.init({
      selector: '.background',
      color: ['#ffffff'],
      maxParticles: 70,
      connectParticles: true,
      responsive: [
        {
          breakpoint: 500,
          options: {
            maxParticles: 20,
          }
        }
      ]
    });
  };


  return <div className="background_contains">
    <canvas className="background"></canvas>

  </div>
}