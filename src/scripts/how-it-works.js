/** Ported verbatim from the reference static build. */
export function init(reduced) {
  // ============ HOW IT WORKS: Lottie tabs (exact framer Tab+images) ============
  // Three scroll-independent Lottie animations (canvas renderer, loop),
  // switched by the pill tabs — identical to the framer component.
  const hiwPanel = document.getElementById("hiw-panel");
  if (hiwPanel && window.lottie) {
    const pills = Array.from(hiwPanel.querySelectorAll(".hiw__pill"));
    const stages = Array.from(hiwPanel.querySelectorAll(".hiw__lottie"));
    const files = ["/assets/hiw-1.json", "/assets/hiw-2.json", "/assets/hiw-3.json"];
    const players = new Array(files.length).fill(null);

    const load = (i) => {
      if (players[i]) return players[i];
      players[i] = lottie.loadAnimation({
        container: stages[i],
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: files[i],
      });
      return players[i];
    };

    let current = 0;
    const setStep = (next) => {
      if (next === current && players[next]) return;
      current = next;
      pills.forEach((p, i) => {
        p.classList.toggle("is-active", i === next);
        p.setAttribute("aria-pressed", i === next ? "true" : "false");
      });
      stages.forEach((s, i) => {
        const active = i === next;
        s.classList.toggle("is-active", active);
        if (active) s.removeAttribute("hidden");
        else s.setAttribute("hidden", "");
        const pl = players[i];
        if (pl) { if (active) pl.play(); else pl.pause(); }
      });
      const pl = load(next);
      if (!reduced) pl.play();
    };

    pills.forEach((p, i) => p.addEventListener("click", () => setStep(i)));

    // lazy-init the first animation when the panel approaches the viewport
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        const pl = load(0);
        if (!reduced) pl.play();
        io.disconnect();
      }
    }, { rootMargin: "600px" });
    io.observe(hiwPanel);
  }
}
