import React, { useRef, useEffect } from "react";
import { useThemeColor } from "../hooks/useThemeColor";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.mjs";

export default function Pointer() {
//   const canvasRef = useRef(null);
//   const twConfig = resolveConfig(tailwindConfig);
  
//   const themeColor = useThemeColor([
//     twConfig.theme.colors.accent,
//     twConfig.theme.colors.secondary,
//   ]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let particles = [];

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const onResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", onResize);

//     const mouse = {
//       x: undefined,
//       y: undefined,
//       last_x: undefined,
//       last_y: undefined,
//     };

//     let inactivityTimeout;

// const onMouseMove = (e) => {
//   clearTimeout(inactivityTimeout); // Reset the timeout each time the mouse moves
//   mouse.last_x = mouse.x;
//   mouse.last_y = mouse.y;
//   mouse.x = e.x;
//   mouse.y = e.y;

//   // Set a new timeout to clear particles after 2 seconds of inactivity
//   inactivityTimeout = setTimeout(() => {
//     particles = [];
//   }, 2000);
// };

// const onMouseOut = () => {
//   mouse.x = mouse.last_x;
//   mouse.y = mouse.last_y;
//   clearTimeout(inactivityTimeout); // Clear the timeout when the mouse leaves
//   particles = []; // Optionally clear particles immediately on mouseout
// };

// document.addEventListener("mousemove", onMouseMove);
// document.addEventListener("mouseout", onMouseOut);


//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((particle, index) => {
//         if (particle.isDead()) {
//           particles.splice(index, 1);
//         } else {
//           particle.update();
//         }
//       });
//       requestAnimationFrame(animate);
//     }

//     animate();

//     const particlesConfig = {
//       radius_in: [1, 3], 
//       vx_in: [-1, 1], 
//       vy_in: [-1, 1],
//       spread: 5, 
//       life: 3, 
//       interval: 0.2,
//       threshold: 1,
//       derivative_ratio: 3,
//     };

//     const random = (min, max) => Math.random() * (max - min) + min;

//     function createParticle() {
//       const radius = random(...particlesConfig.radius_in);
//       const x = mouse.x;
//       const y = mouse.y;
//       let vx = random(...particlesConfig.vx_in);
//       let vy = random(...particlesConfig.vy_in);
//       const color = themeColor;
//       const life = particlesConfig.life;
//       const spread = particlesConfig.spread;
//       const threshold = particlesConfig.threshold;
//       const derivative_ratio = particlesConfig.derivative_ratio;

//       if (
//         Math.abs(mouse.x - mouse.last_x) < threshold &&
//         Math.abs(mouse.y - mouse.last_y) < threshold
//       ) {
//         setTimeout(createParticle, particlesConfig.interval);
//         return;
//       }

//       if (mouse.last_x && mouse.last_y) {
//         vx = (mouse.x - mouse.last_x) / derivative_ratio;
//         vy = (mouse.y - mouse.last_y) / derivative_ratio;
//       }

//       particles.push(
//         new Particle(x, y, vx, vy, radius, color, life, spread, ctx)
//       );

//       setTimeout(createParticle, particlesConfig.interval);
//     }

//     createParticle();

//     return () => {
//       window.removeEventListener("resize", onResize);
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("mouseout", onMouseOut);

//       particles = [];
//     };
//   }, [themeColor]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 hidden md:block not-sr-only"
//     ></canvas>
//   );
// }

// function Particle(x, y, vx, vy, radius, color, life, spread, ctx) {
//   this.x = x + Math.random() * spread - spread / 2;
//   this.y = y + Math.random() * spread - spread / 2;
//   this.vx = vx;
//   this.vy = vy;
//   this.radius = radius;
//   this.color = color;
//   this.life = life;
//   this.ctx = ctx;

//   this.draw = function () {
//     this.ctx.beginPath();
//     this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     this.ctx.fillStyle = this.color;
//     this.ctx.shadowColor = this.color;
//     this.ctx.shadowBlur = 3; // Reduced glow effect
//     this.ctx.fill();
//     this.ctx.closePath();
//   };

//   this.update = function () {
//     this.x += this.vx;
//     this.y += this.vy;
//     this.life -= 1;
//     this.draw();
//   };

//   this.isDead = function () {
//     return this.life <= 0;
//   };
}
