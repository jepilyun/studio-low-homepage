/*
 * GSAP 애니메이션 함수
 */
const GSAPAnimations = () => {
  // Logo Cloud Animation
  gsap.registerPlugin(ScrollTrigger);

  const logoCloud = gsap.timeline({
    scrollTrigger: {
      trigger: "#key-factors",
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play none play reverse", // 스크롤 위치에 닿으면 한 번 재생
    },
  });
  
  // 예시: 중앙 → 좌상단
  logoCloud.fromTo("#key-factors .logo-cloud-item-0", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(10%)",
    left: "calc(10%)",
  }, 0);
  
  // 예시: 중앙 → 우상단
  logoCloud.fromTo("#key-factors .logo-cloud-item-1", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(10%)",
    left: "calc(50%)",
  }, 0);
  
  logoCloud.fromTo("#key-factors .logo-cloud-item-2", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(10%)",
    left: "calc(90%)",
  }, 0);

  logoCloud.fromTo("#key-factors .logo-cloud-item-3", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(50%)",
    left: "calc(5%)",
  }, 0);

  logoCloud.fromTo("#key-factors .logo-cloud-item-4", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(20%)",
    left: "calc(25%)",
  }, 0);

  logoCloud.fromTo("#key-factors .logo-cloud-item-5", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(50%)",
    left: "calc(90%)",
  }, 0);

  logoCloud.fromTo("#key-factors .logo-cloud-item-6", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(90%)",
    left: "calc(5%)",
  }, 0);

  logoCloud.fromTo("#key-factors .logo-cloud-item-7", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(90%)",
    left: "calc(50%)",
  }, 0);

  logoCloud.fromTo("#key-factors .logo-cloud-item-8", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(90%)",
    left: "calc(90%)",
  }, 0);

  logoCloud.fromTo("#key-factors .logo-cloud-item-9", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(25%)",
    left: "calc(70%)",
  }, 0);


  logoCloud.fromTo("#key-factors .logo-cloud-item-10", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(75%)",
    left: "calc(70%)",
  }, 0);

  logoCloud.fromTo("#key-factors .logo-cloud-item-11", {
    opacity: 0,
    xPercent: -50,
    yPercent: -50,
    top: "50%",
    left: "50%",
  }, {
    opacity: 1,
    top: "calc(75%)",
    left: "calc(25%)",
  }, 0);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#key-factors",
      start: "top 0",
      end: "+=1000", // 스크롤 길이 (px)
      scrub: true,   // 스크롤에 따라 부드럽게 재생
      pin: true,     // 해당 섹션을 스크롤 도중 고정
      anticipatePin: 1,
      markers: false // 디버그용 true로 변경 가능
    }
  });
  
  // 순차 등장 설정
  tl.to(".core-value-item:nth-child(1)", {
    opacity: 1,
    y: 0,
    duration: 0.5,
  })
  .to(".core-value-item:nth-child(2)", {
    opacity: 1,
    y: 0,
    duration: 0.5,
  })
  .to(".core-value-item:nth-child(3)", {
    opacity: 1,
    y: 0,
    duration: 0.5,
  })
  .to(".core-value-item:nth-child(4)", {
    opacity: 1,
    y: 0,
    duration: 0.5,
  });;

  // Company Intro
  // const companyIntro = gsap.timeline();

  // companyIntro
  //   .from("#company-intro-msg", { y: 200, duration: 1, opacity: 0, immediateRender: true })
  //   .from("#company-intro-counts", { y: 200, duration: 1, opacity: 0, immediateRender: true, scale: 0 })

  // ScrollTrigger.create({
  //   animation: companyIntro,
  //   trigger: "#company-intro-msg",
  //   start: "top 70%",
  //   toggleActions: "play none play reverse", 
  //   markers: false,
  //   onEnter: () => {
  //     setTimeout(() => {
  //       const companyIntroCounts = document.getElementById("company-intro-counts");

  //       animateNumber(companyIntroCounts.children[0].lastElementChild, 0, 8913, 1200);
  //       animateNumber(companyIntroCounts.children[1].lastElementChild, 0, 1253, 1200);
  //       animateNumber(companyIntroCounts.children[2].lastElementChild, 0, 4350, 1200);
  //       animateNumber(companyIntroCounts.children[3].lastElementChild, 0, 96, 1200);
  //     }, 2000);
  //   },
  // });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuItems = document.getElementById("menu-items");
  
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menuItems.classList.toggle("show");
  });

  // gsap.registerPlugin(ScrollTrigger);

  GSAPAnimations();

  // Slim Top Banner Animation
  const texts = document.querySelectorAll('.slim-top-banner-text');
  let index = 0;
  
  function showNext() {
    texts.forEach((el, i) => {
      el.style.transform = `translateY(-${index * 2}rem)`;
    });
  
    index = (index + 1) % texts.length;
  
    // 다음 롤링까지의 시간 결정
    const delay = (index === 0 || index === 1 || index === 2) ? 1000 : 2000;
    setTimeout(showNext, delay);
  }
  
  // 최초 실행
  setTimeout(showNext, 1000);


  // Hero Success Rolling Animation
  const successRolling = document.querySelectorAll('.success-rolling .success');
  let successRollingIndex = 0;
  
  function showNextSuccess() {
    successRolling.forEach((el, i) => {
      el.style.transform = `translateY(-${successRollingIndex * 4.2}rem)`;
    });
    successRollingIndex = (successRollingIndex + 1) % successRolling.length;
  }

  setInterval(showNextSuccess, 1500);

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