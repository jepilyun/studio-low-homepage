document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // ✅ 탑 배너 01 텍스트 타이핑 효과 실행
  TopBanner01TextTyping();

  TopBanners();
  reviewSlider();
});

/*
 * 탑 배너 텍스트 타이핑 효과 함수
 */
const TopBanner01TextTyping = () => {
  const adText = [ "한 명 한 명 확실하게,", "디자이너 커리어의 시작", "소수정예 프리미엄 아카데미" ];

  const addText1 = document.getElementById("top-banner-01-text-container-01");
  const addText2 = document.getElementById("top-banner-01-text-container-02");
  const addText3 = document.getElementById("top-banner-01-text-container-03");

  // ✅ 첫 번째 문장 실행 후 두 번째 문장 실행
  typeText(addText1, adText[0], 1000); // 0.5초 뒤 실행
  typeText(addText2, adText[1], 3000); // 2초 뒤 실행
  typeText(addText3, adText[2], 4500); // 3초 뒤 실행
}


const TopBanners = () => {
  // Banner 01
  const ani_01 = gsap.timeline();

  ani_01
    .to("#top-banner-01-text-container-01", { x: innerWidth, autoAlpha: 0 })
    .to("#top-banner-01-text-container-02", { x: -innerWidth, autoAlpha: 0 })
    .to("#top-banner-01-text-container-03", { x: innerWidth, autoAlpha: 0 })

  ScrollTrigger.create({
    animation: ani_01,
    trigger: "#top-banner-01",
    start: "top top",
    end: "+=300",
    scrub: true,
    pin: false, 
    anticipatePin: 1,
    markers: false
  });

  // Banner 02
  const ani_02 = gsap.timeline();

  ani_02.from("#top-banner-02 .banner-content", { autoAlpha: 0, scale: 20 })

  ScrollTrigger.create({
    animation: ani_02,
    trigger: "#top-banner-02",
    start: "top top",
    end: "+=700",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    markers: false
  });

  // Banner 03
  const ani_03 = gsap.timeline();

//   gsap.to("#top-banner-03 .banner-content", {
//     duration: 2,
//     x: 500,
//     rotation: 360,
//     borderRadius: 100,
//     scrollTrigger: {
//         trigger: box2
//     }
// });
  // ani_03.from("#top-banner-03 .banner-content", { autoAlpha: 0, scale: 20 })

  // ScrollTrigger.create({
  //   animation: ani_02,
  //   trigger: "#top-banner-03",
  //   start: "top top",
  //   end: "+=700",
  //   scrub: true,
  //   pin: true, 
  //   anticipatePin: 1,
  //   markers: false
  // });
}




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












const reviewSlider = () => {
  const slider = document.getElementById("review-slider");
  const pagination = document.getElementById("review-pagination");

  if (!slider || !pagination) {
    console.error("🚨 Slider or Pagination 요소를 찾을 수 없음!");
    return;
  }

  const slides = Array.from(slider.children); // 슬라이드 목록 가져오기
  const totalSlides = slides.length;

  let currentIndex = 0; // 현재 슬라이드 위치 추적
  const dots = [];

  // 내비게이션 점 동적 생성
  slides.forEach((_, i) => {
    let dot = document.createElement("button");
    dot.classList.add("h-3", "w-3", "rounded-full", "bg-gray-400", "transition-all", "duration-300");

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
        dot.classList.remove("bg-gray-400");
        dot.classList.add("bg-gray-800");
      } else {
        dot.classList.remove("bg-gray-800");
        dot.classList.add("bg-gray-400");
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
};

