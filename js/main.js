

// 헤더 뱃지 스크롤 없애기

const badgeEl = document.querySelector("header .badges")
const toTopEl =document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(function (){
  if(window.scrollY>500){
    //배지 숨기기  
    //gsap.to(요소,지속시간,옵션) 
    //요소는 CSS선택자만 넣어줘도 찾는다.
    gsap.to(badgeEl,.6,{
      opacity:0,
      display:"none"
    });
    //버튼 보이기
    gsap.to(toTopEl, .2,{
      x:0
    })
  }else{
    //배지 보이기
    gsap.to(badgeEl,.6,{
      opacity:1,
      display:"block"
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .2,{
      x:100
    })
  }
},300))

toTopEl.addEventListener("click",function (){
  gsap.to(window, .7 ,{
    scrollTo : 0,
    // scroll pluging cdn
  })
})


// -_throttle(함수,시간) 함수가 정해진 시간마다 사용
//window.scrollY 현재 브라우져에 수직값 
//gsap.to(요소,지속시간,옵션),애니메이션 기능

//순차적 보임기능

const fadeEls =document.querySelectorAll(".visual .fade-in")
fadeEls.forEach(function (fadeEl,index) {
  //gsap.to(요소,지속시간,옵션),애니메이션 기능
  gsap.to(fadeEl,1,{
    delay:(index + 1)*0.7, //0.7 1.4 2.1 2.7
    opacity:1
  })
})

//스와이퍼를 이용한 세로이동
//new Swiper(선택자,옵션)
new Swiper(".notice-line .swiper-container", {
  direction:"vertical",
  autoplay:true, //자동재생
  loop:true //반복재생
});

new Swiper(".promotion .swiper-container", {
  direction:"horizontal", //기본값
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  centeredSlides:true,//1번 슬라이드가 가운데 보이기
  loop:true, //반복재생
  autoplay:{
    delay:5000
  }, // autoPlay 에 값을 객체로 delay:3000(기본값) 설정으로 반복시간을 설정할수 있다.
  pagination:{
    el:".promotion .swiper-pagination",
    clickable:true
  },
  navigation:{
    prevEl:".promotion .swiper-prev",
    nextEl:".promotion .swiper-next"
  }
})

new Swiper(".award .swiper-container",{
  direction:"horizontal", //기본값
  autoplay:true,
  loop:true,
  spaceBetween: 30, //사이사이 여백
  slidesPerView: 5, //한 화면에 보이는 slide갯수
  navigation:{      // 이전,이후 방향키
    prevEl:".award .swiper-prev",
    nextEl:".award .swiper-next"
  }
})

const promotionEl = document.querySelector(".promotion")
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click",function () {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add("hide")
    //숨김처리
  }else{
    promotionEl.classList.remove("hide")
    //보임처리
  }
})

function floatingObject(selector) {
  gsap.to(selector, 1,{
    y:20,
    repeat:-1,//무한반복
    yoyo:true,
    eases:Power1.easeInOut,
    delay:1
  })
}

floatingObject(".floating")


// SCROLL MAGIC

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic
   .Scene({
     triggerElement:spyEl, //보여짐 여부를 감시할 요소를 
     triggerHook:.8 // 조건이 맞을시 아래 setClassToggle 실행
   })
   .setClassToggle(spyEl, "show")
   .addTo(new ScrollMagic.Controller());
})





