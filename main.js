
/**
 * 탑 내비게이션 모바일 버튼 토글 함수
 */
const topNavMobileBtnToggle = () => {
  const topNavMobileMenuBtn = document.getElementById("top-nav-mobile-btn-menu");
  const topNavMobileCloseBtn = document.getElementById("top-nav-mobile-btn-close");

  const topNavContainerMobileFolded = document.getElementById("top-nav-m-folded");
  const topNavContainerMobileExpanded = document.getElementById("top-nav-m-expanded");

  // 메뉴 버튼 클릭 시 메뉴 확장
  topNavMobileMenuBtn.addEventListener("click", () => {
    topNavContainerMobileFolded.style.display = "none";
    topNavContainerMobileExpanded.style.display = "flex";
  });

  // 닫기 버튼 클릭 시 메뉴 접기
  topNavMobileCloseBtn.addEventListener("click", () => {
    topNavContainerMobileFolded.style.display = "flex";
    topNavContainerMobileExpanded.style.display = "none";
  });
};

// 클릭 시 해당 메뉴 페이지로 이동하고 메뉴 접기
const clickExpandedMenu = () => {
  const expandedMenuItems = document.querySelectorAll("#top-nav-m-expanded-menus .menu-item");
  const expandedMenuItemsOutlink = document.querySelectorAll("#top-nav-m-expanded-menus .menu-item-outlink");
  const topNavContainerMobileFolded = document.getElementById("top-nav-m-folded");
  const topNavContainerMobileExpanded = document.getElementById("top-nav-m-expanded");

  expandedMenuItems.forEach(item => {
    item.addEventListener("click", () => {
      topNavContainerMobileFolded.style.display = "flex";
      topNavContainerMobileExpanded.style.display = "none";
      
      const targetId = item.getAttribute("href"); // 예: "#section"
      const targetElement = document.querySelector(targetId); // 해당 ID의 요소 찾기

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  expandedMenuItemsOutlink.forEach(item => {
    item.addEventListener("click", () => {
      topNavContainerMobileFolded.style.display = "flex";
      topNavContainerMobileExpanded.style.display = "none"; 
    });
  });
}

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

  // User Review Summary
  // ScrollTrigger.create({
  //   trigger: "#student-reviews .summary-container",
  //   start: "top bottom",
  //   end: "bottom 30%",
  //   markers: false,
  //   onEnter: () => {
  //     document.querySelectorAll("#student-reviews .badge-item-bg-box")
  //       .forEach(item => {
  //         item.classList.add("badge-item-bg-box-rotate-animation");
  //       });
  //   },
  //   onEnterBack: () => {
  //     document.querySelectorAll("#student-reviews .badge-item-bg-box")
  //       .forEach(item => {
  //         item.classList.add("badge-item-bg-box-rotate-animation");
  //       });
  //   },
  //   onLeave: () => {
  //     document.querySelectorAll("#student-reviews .badge-item-bg-box")
  //       .forEach(item => {
  //         item.classList.remove("badge-item-bg-box-rotate-animation");
  //       });
  //   },
  //   onLeaveBack: () => {
  //     document.querySelectorAll("#student-reviews .badge-item-bg-box")
  //       .forEach(item => {
  //         item.classList.remove("badge-item-bg-box-rotate-animation");
  //       });
  //   },
  // });
}

let lastScrollY = window.scrollY;

const topNavBarSetClassAfterLoading = () => {
  const topNavBar = document.getElementById("top-nav-bar");
  const companyIntro = document.getElementById("company-intro");

  if (companyIntro && companyIntro.getBoundingClientRect().top < window.innerHeight / 5) {
    topNavBar.classList.add("fg-black");
    topNavBar.classList.add("bg-blur");
    topNavBar.classList.remove("fg-white");
  }

  if (companyIntro && companyIntro.getBoundingClientRect().top > window.innerHeight / 2) {
    topNavBar.classList.add("fg-white");
    topNavBar.classList.remove("fg-black");
    topNavBar.classList.remove("bg-blur");
  }
}

/*
 * 스크롤 이벤트 핸들러
 * 탑 내비게이션 배경 색상 변경 처리
 */
const handleScroll = () => {
  const topNavBar = document.getElementById("top-nav-bar");

  const currentScrollY = window.scrollY;
  const isScrollDown = currentScrollY > lastScrollY;
  const isScrollUp = currentScrollY < lastScrollY;

  lastScrollY = currentScrollY; // 현재 위치 업데이트

  if (isScrollDown) {
    const companyIntro = document.getElementById("company-intro");

    if (companyIntro && companyIntro.getBoundingClientRect().top < window.innerHeight / 5) {
      topNavBar.classList.add("fg-black");
      topNavBar.classList.add("bg-blur");
      topNavBar.classList.remove("fg-white");
    }
  }

  if (isScrollUp) {
    const companyIntro = document.getElementById("company-intro");

    if (companyIntro && companyIntro.getBoundingClientRect().top > window.innerHeight / 2) {
      topNavBar.classList.add("fg-white");
      topNavBar.classList.remove("fg-black");
      topNavBar.classList.remove("bg-blur");
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
  // ✅ 탑 내비게이션 모바일 버튼 이벤트 실행
  topNavMobileBtnToggle();
  clickExpandedMenu(); // 메뉴 클릭스 펼쳐진 메뉴 닫히도록

  topNavBarSetClassAfterLoading();
  // ✅ 탑 내비게이션 Class 추가 효과 실행
  // 스크롤 이벤트 등록
  window.addEventListener("scroll", handleScroll);

  // ✅ 탑 배너 01 텍스트 타이핑 효과 실행
  // TopBanner01TextTyping();

  gsap.registerPlugin(ScrollTrigger);

  GSAPAnimations();

  // ✅ 키 팩터 로고 애니메이션 실행
  // const logos = document.querySelectorAll("#key-factors .logo-cloud .logo");
  // const usedPositions = [];

  // logos.forEach((logo, i) => {
  //   // (1) 좌표를 격자 기반으로 나누어서 분산
  //   const row = Math.floor(i / 4);
  //   const col = i % 4;

  //   // const top = row * 20 + Math.random() * 10; // 0~90%
  //   // const left = col * 20 + Math.random() * 10; // 0~90%
  //   const top = Math.random() * 100;
  //   const left = Math.random() * 100;
  //   console.log(top, left);
  //   logo.style.top = `${top}%`;
  //   logo.style.left = `${left}%`;

  //   // (2) 랜덤 애니메이션 타이밍
  //   const duration = 15 + Math.random() * 10;
  //   const delay = Math.random() * 5;
  //   logo.style.animationDuration = `${duration}s`;
  //   logo.style.animationDelay = `${delay}s`;
  // });


  // Review Masonry
  const masonry = document.getElementById("masonry-container");
  const items = Array.from(masonry.querySelectorAll(".masonry-item"));

  // 기존 아이템 제거
  items.forEach(item => masonry.removeChild(item));

  // 열 개수 설정
  const columnCount = 4;
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