document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOMContentLoaded fired");
  gsap.registerPlugin(ScrollTrigger);

  TopBannerNo1();
  reviewSlider();
});


const TopBannerNo1 = () => {
//01 : 이미지 애니메이션 주기
  const ani1 = gsap.timeline();
  ani1.to("#top-banner-01 .banner-content", {rotation: 720, scale: 0, borderRadius: 200})
      .to("#top-banner-01 .banner-content", {rotation: 0, scale: 1, borderRadius: 20})

  ScrollTrigger.create({
    animation: ani1,
    trigger: "#top-banner-01",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    markers: true
  });

      //02 : 이미지를 순차적으로 나오기 
  const ani2 = gsap.timeline();
  ani2.from("#top-banner-02 .banner-content", {autoAlpha:0, borderRadius: 200})
      .from("#top-banner-02 .banner-content", {autoAlpha:0, borderRadius: 200})
      .from("#top-banner-02 .banner-content", {autoAlpha:0, borderRadius: 200})

  ScrollTrigger.create({
    animation: ani2,
    trigger: "#top-banner-02",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true, 
    anticipatePin: 1,
    markers: false
  });
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

