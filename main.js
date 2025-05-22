/*
 * GSAP 애니메이션 함수
 */
const GSAPAnimations = () => {
  // Company Intro
  const companyIntro = gsap.timeline();

  companyIntro
    .from("#company-intro-msg", { y: 200, duration: 1, opacity: 0, immediateRender: true })
    .from("#company-intro-counts", { y: 200, duration: 1, opacity: 0, immediateRender: true, scale: 0 })

  ScrollTrigger.create({
    animation: companyIntro,
    trigger: "#company-intro-msg",
    start: "top 70%",
    toggleActions: "play none play reverse", 
    markers: false,
    onEnter: () => {
      setTimeout(() => {
        const companyIntroCounts = document.getElementById("company-intro-counts");

        animateNumber(companyIntroCounts.children[0].lastElementChild, 0, 8913, 1200);
        animateNumber(companyIntroCounts.children[1].lastElementChild, 0, 1253, 1200);
        animateNumber(companyIntroCounts.children[2].lastElementChild, 0, 4350, 1200);
        animateNumber(companyIntroCounts.children[3].lastElementChild, 0, 96, 1200);
      }, 2000);
    },
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuItems = document.getElementById("menu-items");
  
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menuItems.classList.toggle("show");
  });

  gsap.registerPlugin(ScrollTrigger);

  GSAPAnimations();

  // Review Masonry
  const masonry = document.getElementById("masonry-container");
  const items = Array.from(masonry.querySelectorAll(".masonry-item"));

  // 기존 아이템 제거
  items.forEach(item => masonry.removeChild(item));

  // 열 개수 설정
  const screenSize = window.innerWidth;
  const columnCount = screenSize > 1024 ? 4 : screenSize > 768 ? 3 : 1;
  const columns = [];

  for (let i = 0; i < columnCount; i++) {
    const col = document.createElement("div");
    col.className = "column";
    masonry.appendChild(col);
    columns.push(col);
  }

  // 가장 짧은 column에 item 추가
  items.forEach(item => {
    const shortestColumn = columns.reduce((a, b) =>
      a.scrollHeight < b.scrollHeight ? a : b
    );
    shortestColumn.appendChild(item);
  });
});