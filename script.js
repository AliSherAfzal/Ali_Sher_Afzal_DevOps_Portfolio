const revealElements = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".main-nav a");
const pageSections = [...document.querySelectorAll("main section[id]")];
const copyEmailButton = document.querySelector("#copy-email");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("show"));
}

const updateActiveNav = () => {
  const currentPosition = window.scrollY + 170;

  pageSections.forEach((section) => {
    const isActive =
      currentPosition >= section.offsetTop &&
      currentPosition < section.offsetTop + section.offsetHeight;

    navLinks.forEach((link) => {
      const isMatch = link.getAttribute("href") === `#${section.id}`;
      link.classList.toggle("active", isActive && isMatch);
    });
  });
};

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("load", updateActiveNav);

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("alisherafzal87@gmail.com");
      copyEmailButton.textContent = "Email Copied";
    } catch (error) {
      copyEmailButton.textContent = "Copy Failed";
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = "Copy Email";
    }, 1800);
  });
}
