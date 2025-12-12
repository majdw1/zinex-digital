document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Simple scroll animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

  // Lead form -> open WhatsApp with prefilled message
  const form = document.getElementById("lead-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name")?.value || "";
      const phone = form.querySelector("#phone")?.value || "";
      const city = form.querySelector("#city")?.value || "";
      const type = form.querySelector("#type")?.value || "";
      const messageText = form.querySelector("#message")?.value || "";

      const typeLabelMap = {
        home: "בית פרטי",
        building: "בניין משותף",
        business: "עסק / חניון",
        other: "אחר / לא בטוח",
      };

      const typeLabel = typeLabelMap[type] || "לא צויין";

      const textLines = [
        "היי Klek Charge,",
        "השארתי פרטים דרך האתר ואשמח לחזרה לגבי עמדת טעינה 22kW.",
        "",
        `שם: ${name}`,
        `טלפון: ${phone}`,
        city ? `עיר / אזור: ${city}` : "",
        `סוג פתרון טעינה: ${typeLabel}`,
        messageText ? "" : "",
        messageText ? `הערות נוספות: ${messageText}` : "",
      ].filter(Boolean);

      const text = encodeURIComponent(textLines.join("\n"));
      const phoneNumber = "972527004686";
      const waUrl = `https://wa.me/${phoneNumber}?text=${text}`;
      window.open(waUrl, "_blank");
    });
  }
});
