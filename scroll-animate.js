// Simple IntersectionObserver-based scroll reveal
(function () {
  if (typeof window === "undefined") return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return; // respect reduce-motion preference

  const selector = [
    "h2",
    ".section-content > p",
    ".offer-card",
    ".review-card",
    ".work-text p",
  ].join(", ");
  const elems = Array.from(document.querySelectorAll(selector));

  // add base class so CSS can animate
  elems.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    }
  );

  elems.forEach((el) => observer.observe(el));
})();
