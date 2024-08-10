

//장학생, 홍보사이트 반응형 이벤트 적용
function responsiveStyle() {
  
	const windowWidth = window.innerWidth;
  const pageWrapper = document.querySelector('.page_wrapper');
  const headerTop = document.querySelector('.header_top');
  const info = document.querySelector('.header_info');
  const footer = document.querySelector('#footer');
  
  if (windowWidth < 1025) {

    document.querySelectorAll('.gnb_2depth').forEach(function (element) {
      element.style.maxHeight = '0';
    });
    document.querySelector('.header_logo').classList.remove('on');
    document.querySelector('.gnb_submenu').classList.remove('on');
    document.querySelector(".btn_menu").classList.remove('on');

    //tablet, mobile
    let mobileToggle = document.querySelector(".btn_menu");
    let gnbMenu = document.querySelector(".gnb_submenu");
    let gnbList = document.querySelectorAll('.gnb_list');
    let gnbDepth = document.querySelectorAll('.gnb_2depth');
    let logo = document.querySelector('.header_logo');
    let isButtonOn = false;

    mobileToggle.addEventListener("click", function (e) {
      e.preventDefault();
      if (isButtonOn) {
        mobileToggle.classList.remove('on');
        logo.classList.remove('on');
        gnbMenu.classList.remove('on');
        gnbList.forEach(function (element) {
          element.classList.remove('on');
        });
        gnbDepth.forEach(function (element) {
          element.style.maxHeight = '0';
        });
        document.querySelector('body').classList.remove('overflow');
      } else {
        mobileToggle.classList.add('on');
        logo.classList.add('on');
        gnbMenu.classList.add('on');
        document.querySelector('body').classList.add('overflow');
        gnbDepth.forEach(function (element) {
          element.style.maxHeight = '0';
        });
      }
      // 버튼 상태를 토글
      isButtonOn = !isButtonOn;
    });

    if (gnbMenu.firstChild) {
      gnbMenu.insertBefore(info, gnbMenu.firstChild);
    } 

    if (gnbMenu.lastChild) {
      gnbMenu.insertBefore(footer, gnbMenu.lastChild);
    } 

    gnbList.forEach(function (list) {

      //gnb2depth 요소가 존재하지 않으면 off 클래스 추가
      let gnb2DepthElement = list.querySelector('.gnb_2depth');
      if (!gnb2DepthElement) {
        list.classList.add('off');
      }

      list.addEventListener('click', function() {
        list.classList.add('on');

         // gnb_2depth 요소가 존재하는지 확인하고 maxHeight 설정
        if (gnb2DepthElement) {
          gnb2DepthElement.style.maxHeight = gnb2DepthElement.scrollHeight + 'px';
        }

        gnbList.forEach(function (otherList) {
          if (otherList !== list) {
            otherList.classList.remove('on');
            let gnb2DepthChildren = otherList.querySelectorAll('.gnb_2depth');
            gnb2DepthChildren.forEach(function(child) {
              child.style.maxHeight = '0'; // maxHeight를 0으로 설정
            });
          }
        });
      });
    })

  }else {
    headerTop.appendChild(info);

    if (pageWrapper.lastChild) {
      pageWrapper.insertBefore(footer, pageWrapper.lastChild);
    } 

    document.querySelector('body').classList.remove('overflow');
    document.querySelector('.gnb_submenu').classList.remove('on');
    document.querySelectorAll('.gnb_2depth').forEach(function (element) {
      element.style.maxHeight = 'inherit';
    });
    document.querySelectorAll('.gnb_list').forEach(function (list) {
      list.classList.remove('off');
    });
    document.querySelector(".btn_menu").classList.remove('on');

    document.querySelector(".btn_menu").addEventListener('click', function() {
      this.classList.remove('on');
      document.querySelector('body').classList.remove('overflow');
      document.querySelector('.gnb_submenu').style.maxHeight = document.querySelector('.gnb_submenu').scrollHeight + 'px'
      document.querySelectorAll('.gnb_2depth').forEach(function (element) {
        element.style.maxHeight = 'inherit';
      });
    });
    
  }
}

document.addEventListener('DOMContentLoaded', function () {
  responsiveStyle();
});
window.addEventListener('resize', function(){
  var timer = null;
  clearTimeout(timer);
  timer = setTimeout(function(){
    responsiveStyle();
  }, 300);
});