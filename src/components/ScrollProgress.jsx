import { useEffect, useState, useRef } from "react";
import "../styles/ScrollProgress.css";


function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const calc = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      const clamped = Math.min(100, Math.max(0, progress));

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setScroll(clamped));
    };

    // initial
    calc();

    const onScroll = () => calc();
    const onResize = () => calc();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const valueNow = Math.round(scroll);

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={valueNow}
      aria-label="Page scroll progress"
      style={{ width: `${scroll}%` }}
    />
  );
}

export default ScrollProgress;