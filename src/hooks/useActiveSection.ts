import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[], rootMargin = "-40% 0px -55% 0px") => {
  const [active, setActive] = useState<string>("hero");
  useEffect(() => {
    const sections = ids
      .map(id => document.querySelector<HTMLElement>(`[data-section='${id}']`))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id) setActive(id);
          }
        });
      },
      { root: null, threshold: 0.2, rootMargin }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      const el = document.getElementById("scroll-progress");
      if (el) el.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
};
