/**
 * 텍스트 타이핑 효과 함수
 * @param {HTMLElement} element 타이핑 효과를 적용할 HTML 요소
 * @param {string[]} text 타이핑할 텍스트 배열
 * @param {number} delay 타이핑 시작 지연 시간
 * @param {number} speed 타이핑 속도
 */
const typeText = (element, text, delay, speed = 100) => {
  let index = 0;

  setTimeout(() => {
    const interval = setInterval(() => {
      element.innerHTML += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        element.style.borderRight = "none"; // 커서 효과 제거
      }
    }, speed);
  }, delay);
}

/**
 * 숫자를 애니메이션으로 변경하는 함수
 * @param targetElement 숫자를 변경할 요소
 * @param start 시작 숫자 ex. 0
 * @param end 끝 숫자 ex. 1000
 * @param duration 애니메이션 지속 시간 ex. 1000
 */
const animateNumber = (targetElement, start, end, duration) => {
  if (!targetElement) return; // 요소가 없으면 종료

  let startTime = null;

  function updateNumber(timestamp) {
    if (!startTime) startTime = timestamp; // 첫 실행 시점 설정
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1); // 진행률 0~1로 제한
    const easedProgress = 1 - Math.pow(1 - progress, 3); // 감속 효과 적용

    const current = Math.round(start + (end - start) * easedProgress);

    targetElement.textContent = current.toLocaleString(); // 숫자 표시

    if (progress < 1) {
      requestAnimationFrame(updateNumber); // 다음 프레임에서 업데이트
    }
  }

  requestAnimationFrame(updateNumber);
};

/**
 * 탑 내비게이션 모바일 버튼 토글 함수
 */
const topNavMobileBtnToggle = () => {
  const topNavMobileMenuBtn = document.getElementById("top-nav-mobile-btn-menu");
  const topNavMobileCloseBtn = document.getElementById("top-nav-mobile-btn-close");

  const topNavContainerMobileFolded = document.getElementById("top-nav-mobile-folded");
  const topNavContainerMobileExpanded = document.getElementById("top-nav-mobile-expanded");

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
  const expandedMenuItems = document.querySelectorAll(".expanded-menu-item");
  const expandedMenuItemsOutlink = document.querySelectorAll(".expanded-menu-item-outlink");
  const topNavContainerMobileFolded = document.getElementById("top-nav-mobile-folded");
  const topNavContainerMobileExpanded = document.getElementById("top-nav-mobile-expanded");

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
 * 탑 배너 텍스트 타이핑 효과 함수
 */
const TopBanner01TextTyping = () => {
  const adTextMobile = [ "한 명 한 명", "확 실 하 게,", "디 자 이 너", "커 리 어 의 시 작", "소 수 정 예", "프 리 미 엄", "아 카 데 미", "스 튜 디 오 로 우" ];

  const addText1 = document.getElementById("top-banner-01-text-01-m");
  const addText2 = document.getElementById("top-banner-01-text-02-m");
  const addText3 = document.getElementById("top-banner-01-text-03-m");
  const addText4 = document.getElementById("top-banner-01-text-04-m");
  const addText5 = document.getElementById("top-banner-01-text-05-m");
  const addText6 = document.getElementById("top-banner-01-text-06-m");
  const addText7 = document.getElementById("top-banner-01-text-07-m");
  const addText8 = document.getElementById("top-banner-01-text-08-m");
  // ✅ 첫 번째 문장 실행 후 두 번째 문장 실행
  typeText(addText1, adTextMobile[0], 500); // 0.5초 뒤 실행
  typeText(addText2, adTextMobile[1], 1400); // 2초 뒤 실행
  typeText(addText3, adTextMobile[2], 2300); // 3초 뒤 실행
  typeText(addText4, adTextMobile[3], 3200); // 4초 뒤 실행
  typeText(addText5, adTextMobile[4], 4600); // 5초 뒤 실행
  typeText(addText6, adTextMobile[5], 5500); // 6초 뒤 실행
  typeText(addText7, adTextMobile[6], 6400); // 7초 뒤 실행
  typeText(addText8, adTextMobile[7], 7300); // 8초 뒤 실행

  const adTextWide = [ "한 명 한 명 확실하게,", "디자이너 커리어의 시작", "소수정예 프리미엄 아카데미", "스튜디오 로우" ];

  const addTextW1 = document.getElementById("top-banner-01-text-01-w");
  const addTextW2 = document.getElementById("top-banner-01-text-02-w");
  const addTextW3 = document.getElementById("top-banner-01-text-03-w");
  const addTextW4 = document.getElementById("top-banner-01-text-04-w");

  typeText(addTextW1, adTextWide[0], 500);
  typeText(addTextW2, adTextWide[1], 2000);
  typeText(addTextW3, adTextWide[2], 3500);
  typeText(addTextW4, adTextWide[3], 5500);
}

/*
 * GSAP 애니메이션 함수
 */
const GSAPAnimations = () => {

  // BG Change
  gsap.utils.toArray(".bg-color-change").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");
    
    ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 50%",
        markers: false,

        onEnter: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.4,
        }),
        onEnterBack: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.4,
        }),
    });
  });

  // Top Banner 02
  const banner02Effect = gsap.timeline({ paused: true });

  banner02Effect
    .fromTo("#top-banner-02-content-mobile", 
      { x: 120, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.5 }
    )
    .fromTo("#top-banner-02-content-wide", 
      { x: 120, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.5 }, "<"
    );

  ScrollTrigger.create({
    trigger: "#top-banner-02",
    start: "top 30%",
    end: "bottom 50%",
    onEnter: () => banner02Effect.play(),
    onLeave: () => banner02Effect.reverse(),
    onEnterBack: () => banner02Effect.play(),
    onLeaveBack: () => banner02Effect.reverse(),
    markers: false
  });

  // Top Banner 03
  const banner03Effect = gsap.timeline({ paused: true });

  banner03Effect
    .fromTo("#top-banner-03-content-mobile", 
      { x: -120, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.5 }
    )
    .fromTo("#top-banner-03-content-wide", 
      { x: -120, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.5 }, "<"
    );

  ScrollTrigger.create({
    trigger: "#top-banner-03",
    start: "top 30%",
    end: "bottom 50%",
    onEnter: () => banner03Effect.play(),
    onLeave: () => banner03Effect.reverse(),
    onEnterBack: () => banner03Effect.play(),
    onLeaveBack: () => banner03Effect.reverse(),
    markers: false
  });

  // Top Banner 04
  const banner04Effect = gsap.timeline({ paused: true });

  banner04Effect
    .fromTo("#top-banner-04-content-mobile", 
      { x: 120, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.5 }
    )
    .fromTo("#top-banner-04-content-wide", 
      { x: 120, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.5 }, "<"
    );

  ScrollTrigger.create({
    trigger: "#top-banner-04",
    start: "top 30%",
    end: "bottom 50%",
    onEnter: () => banner04Effect.play(),
    onLeave: () => banner04Effect.reverse(),
    onEnterBack: () => banner04Effect.play(),
    onLeaveBack: () => banner04Effect.reverse(),
    markers: false
  });
  
  // Top Banner 05
  const banner05Effect = gsap.timeline({ paused: true });

  banner05Effect
    .fromTo("#top-banner-05-content-mobile", 
      { x: -120, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.5 }
    )
    .fromTo("#top-banner-05-content-wide", 
      { x: -120, autoAlpha: 0 }, 
      { x: 0, autoAlpha: 1, duration: 0.5 }, "<"
    );

  ScrollTrigger.create({
    trigger: "#top-banner-05",
    start: "top 30%",
    end: "bottom 50%",
    onEnter: () => banner05Effect.play(),
    onLeave: () => banner05Effect.reverse(),
    onEnterBack: () => banner05Effect.play(),
    onLeaveBack: () => banner05Effect.reverse(),
    markers: false
  });

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

let lastScrollY = window.scrollY;

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
    const topBanner07 = document.getElementById("top-banner-07");

    if (topBanner07 && topBanner07.getBoundingClientRect().bottom > window.innerHeight / 5) {
      topNavBar.classList.add("fg-white");
      topNavBar.classList.remove("fg-black");
      topNavBar.classList.remove("bg-blur");
    }
  }
}

/*
 * 리뷰 슬라이더 초기화 함수
 */
const reviewSlider = () => {
  const slider = document.getElementById("review-slider");
  const pagination = document.getElementById("review-pagination");

  if (!slider || !pagination) {
    console.error("🚨 Slider or Pagination 요소를 찾을 수 없음!");
    return;
  }

  const slides = Array.from(slider.children); // 슬라이드 목록 가져오기
  let currentIndex = 0; // 현재 슬라이드 위치 추적
  const dots = [];

  // 내비게이션 점 동적 생성
  slides.forEach((_, i) => {
    let dot = document.createElement("button");
    dot.classList.add("dot-pagination-circle", "rounded-full", "bg-white", "transition-all", "duration-300");

    // 클릭 시 해당 슬라이드로 이동
    dot.addEventListener("click", function () {
      currentIndex = i;
      slider.scrollTo({
        left: slider.clientWidth * i,
        behavior: "smooth",
      });

      updateDots(i);
    });

    pagination.appendChild(dot);
    dots.push(dot);
  });

  // 현재 선택된 dot 업데이트 함수
  function updateDots(activeIndex) {
    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.classList.remove("bg-white");
        dot.classList.add("dot-pagination-circle-active");
      } else {
        dot.classList.remove("dot-pagination-circle-active");
        dot.classList.add("bg-white");
      }
    });
  }

  // 🛠️ **추가된 스크롤 이벤트 리스너**
  slider.addEventListener("scroll", function () {
    let scrollLeft = slider.scrollLeft; // 현재 가로 스크롤 위치
    let slideWidth = slider.clientWidth; // 슬라이드 한 개의 너비
    let newIndex = Math.round(scrollLeft / slideWidth); // 현재 활성화된 슬라이드 인덱스 계산

    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      updateDots(newIndex);
    }
  });

  // 초기 활성화된 dot 설정
  updateDots(0);
}


document.addEventListener("DOMContentLoaded", function () {
  // ✅ 탑 내비게이션 모바일 버튼 이벤트 실행
  topNavMobileBtnToggle();
  clickExpandedMenu(); // 메뉴 클릭스 펼쳐진 메뉴 닫히도록

  // ✅ 탑 내비게이션 Class 추가 효과 실행
  // 스크롤 이벤트 등록
  window.addEventListener("scroll", handleScroll);

  // ✅ 탑 배너 01 텍스트 타이핑 효과 실행
  TopBanner01TextTyping();

  gsap.registerPlugin(ScrollTrigger);

  GSAPAnimations();

  reviewSlider();
});