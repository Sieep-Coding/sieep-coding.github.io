import { useRef, useEffect } from "react";

export default function Pointer() {
  const dotRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const actualRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const getColor = () =>
    document.documentElement.classList.contains("dark") ? "#96a6e2" : "#202020";

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onThemeChange = () => {
      if (dot) dot.style.background = getColor();
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      actualRef.current.x = lerp(actualRef.current.x, posRef.current.x, 0.12);
      actualRef.current.y = lerp(actualRef.current.y, posRef.current.y, 0.12);
      dot.style.transform = `translate(${actualRef.current.x}px, ${actualRef.current.y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    dot.style.background = getColor();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("themechange", onThemeChange);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("themechange", onThemeChange);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        opacity: 0.7,
        willChange: "transform",
        }}
    />
  );
}