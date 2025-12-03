//depth2
/* $(function () {
  // 헤더에 마우스 올리면 2차 메뉴 열기
  $("nav").mouseenter(function () {
    $(".gnb").addClass("active");
    $(".depth2_wrap").addClass("show");
    $(".search_depth2").removeClass("show");
  });

  // 헤더와 depth2 둘 다 벗어났을 때 닫기
  $(".depth2_wrap").mouseleave(function () {
    $(".gnb").removeClass("active");
    $(".depth2_wrap").removeClass("show");
  });
}); */
//depth2
$(function () {

  function openMobileDepth2() {
    $(".mobile_depth2_panel").addClass("show");
    $(".mobile_depth2_overlay").addClass("show");
    $("body").addClass("no-scroll");
  }

  function closeMobileDepth2() {
    $(".mobile_depth2_panel").removeClass("show");
    $(".mobile_depth2_overlay").removeClass("show");
    $("body").removeClass("no-scroll");
  }

  // 반응형 이벤트 바인딩 함수
  function bindMenuEvent() {
    const winW = $(window).width();

    // 기존 이벤트 제거 (중복 방지)
    $("nav").off("mouseenter mouseleave click");
    $(".mobile_depth2_overlay").off("click");
    $(".mobile_depth2_close").off("click");

    if (winW > 800) {
      // -----------------------------
      // PC: 기존 mouseenter/leave 사용
      // -----------------------------
      $("nav").on("mouseenter", function () {
        $(".gnb").addClass("active");
        $(".depth2_wrap").addClass("show");
        $(".search_depth2").removeClass("show");
      });

      $(".depth2_wrap").on("mouseleave", function () {
        $(".gnb").removeClass("active");
        $(".depth2_wrap").removeClass("show");
      });

    } else {
      // -----------------------------
      // Mobile: nav 클릭 → 슬라이드 메뉴 열기
      // -----------------------------
      $("nav").on("click", function (e) {
        e.preventDefault();
        openMobileDepth2();
      });

      $(".mobile_depth2_overlay, .mobile_depth2_close").on("click", function () {
        closeMobileDepth2();
      });
    }
  }

  // 첫 실행
  bindMenuEvent();

  // resize 시 이벤트 다시 바인딩
  $(window).on("resize", function () {
    bindMenuEvent();
  });
});


//mdepth2
$(function () {
  // 모바일 depth2 메뉴 토글
  $(".mobile_depth2_inner > ul > li > a").click(function (e) {
    e.preventDefault(); // 링크 이동 막기

    const parentLi = $(this).parent("li");
    const depth2 = parentLi.find(".mdepth2");

    // 이미 열려 있으면 닫기
    if (depth2.is(":visible")) {
      depth2.slideUp(300);
      parentLi.find(".mdepth2_btn1").show(); // ▼ 표시
      parentLi.find(".mdepth2_btn2").hide(); // ▲ 숨김

      // active 제거
      $(this).removeClass("active");

      return;
    }

    // 🔥 아코디언 효과: 다른 메뉴는 모두 닫기
    $(".mdepth2").slideUp(300);
    $(".mobile_depth2_inner > ul > li > a").removeClass("active");
    $(".mdepth2_btn1").show();
    $(".mdepth2_btn2").hide();

    // 클릭한 메뉴만 열기
    depth2.slideDown(300);
    parentLi.find(".mdepth2_btn1").hide(); // ▼ 숨김
    parentLi.find(".mdepth2_btn2").show(); // ▲ 표시

    // active 추가
    $(this).addClass("active");
  });
});




//.global
$(".global").click(function (e) {
  e.stopPropagation(); // 이벤트 버블링 방지
  $(".global_depth2").addClass("show").toggle();
});

$(document).click(function () {
  $(".global_depth2").removeClass("show").hide();
});

// 검색 아이콘 클릭 → 열기
$(".search").click(function (e) {
  e.stopPropagation();
  $(".gnb").removeClass("active");
  $(".depth2_wrap").removeClass("show");
  $(".search_depth2").toggleClass("show");
});

// 닫기 버튼 클릭 → 닫기
$(".btn_close").click(function () {
  $(".search_depth2").removeClass("show");
});

// 배경 아무 데나 클릭해도 닫히게
$(document).click(function (e) {
  if (!$(e.target).closest(".search_box, .search").length) {
    $(".search_depth2").removeClass("show");
    $(".global_depth2").removeClass("show");
    $(".depth2_wrap").removeClass("show");
    $(".gnb").removeClass("active");
  }
});

