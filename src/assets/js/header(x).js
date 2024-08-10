/**
 * header 관련 이벤트
 */
function headerStyle() {
	const windowWidth = window.innerWidth;
  const gnbItems = document.querySelectorAll('.gnb_1depth > li');
  const gnbLinks = document.querySelectorAll('.gnb_1depth > li > a');
  const gnbSubMenu = document.querySelector('.gnb_submenu');
  const gnbSubMenuList = document.querySelectorAll('.gnb_submenu .gnb_list');
  const headerTop = document.querySelector('.header_top');
  const hamburger = document.querySelector('.btn_menu');

  function gnbMouseEnter(event) {
    gnbLinks.forEach(function (link) {
      link.classList.remove('on');
      gnbSubMenu.classList.remove('on');
    });
    event.currentTarget.querySelector('a').classList.add('on');
    gnbSubMenu.style.maxHeight = gnbSubMenu.scrollHeight + 'px';
    gnbSubMenu.classList.add('on');
  }
  
  function gnbMouseLeave() {
    gnbSubMenu.style.maxHeight = '0';
    gnbLinks.forEach(function (link) {
      link.classList.remove('on');
      gnbSubMenu.classList.remove('on');
    });
  }

  function gnbSubMouseEnter() {
    gnbSubMenu.style.maxHeight = gnbSubMenu.scrollHeight + 'px';
    gnbSubMenu.classList.add('on');
  }

  function gnbSubMouseLeave() {
    gnbSubMenu.style.maxHeight = '0';
    gnbSubMenu.classList.remove('on');
  }

  function gnbSubMenuListItemEnter(event) {
    var target = Array.from(event.currentTarget.parentNode.children).indexOf(event.currentTarget);
    gnbLinks[target].classList.add('on');
  }

  function gnbSubMenuListItemLeave(event) {
    var target = Array.from(event.currentTarget.parentNode.children).indexOf(event.currentTarget);
    gnbLinks[target].classList.remove('on');
  }

  function headerTopMouseEnter() {
    document.querySelector('body').classList.remove('scrolly');
  }

  function hamburgerClick() {
    gnbSubMenu.style.maxHeight = gnbSubMenu.scrollHeight + 'px';
    gnbSubMenu.classList.add('on');
  }
  
  function attachEventListener() {
    gnbItems.forEach(function (item) {
      item.addEventListener('mouseenter', gnbMouseEnter);
      item.addEventListener('mouseleave', gnbMouseLeave);
    });

    gnbSubMenu.addEventListener('mouseenter', gnbSubMouseEnter);
    gnbSubMenu.addEventListener('mouseleave', gnbSubMouseLeave);
    
    gnbSubMenuList.forEach(function (item) {
      item.addEventListener('mouseenter', gnbSubMenuListItemEnter);
      item.addEventListener('mouseleave', gnbSubMenuListItemLeave);
    });

    headerTop.addEventListener('mouseenter', headerTopMouseEnter);
    hamburger.addEventListener('click', hamburgerClick);
  }

  function detachEventListener() {
    gnbItems.forEach(function (item) {
      item.removeEventListener('mouseenter', gnbMouseEnter);
      item.removeEventListener('mouseleave', gnbMouseLeave);
    });

    gnbSubMenu.removeEventListener('mouseenter', gnbSubMouseEnter);
    gnbSubMenu.removeEventListener('mouseleave', gnbSubMouseLeave);
    
    gnbSubMenuList.forEach(function (item) {
      item.removeEventListener('mouseenter', gnbSubMenuListItemEnter);
      item.removeEventListener('mouseleave', gnbSubMenuListItemLeave);
    });

    headerTop.removeEventListener('mouseenter', headerTopMouseEnter);
    hamburger.removeEventListener('click', hamburgerClick);
    
  }
  
  if (windowWidth > 1025) {
    //PC
    attachEventListener();
  
    let didScroll;
    let lastScrollTop = 0;
    const delta = 0; // 동작의 구현이 시작되는 위치

    window.addEventListener('scroll', function(event) {
      didScroll = true;
    
      setInterval(function() {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 10);
    });
  
    // 동작을 구현
    function hasScrolled() {
      // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
      const st = window.pageYOffset || document.documentElement.scrollTop;

      // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
      if (Math.abs(lastScrollTop - st) <= delta) {
        return;
      }

      // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
      if (st > lastScrollTop) {
        // Scroll Down
        document.body.classList.add('scrolly');
      } else {
        // Scroll Up
        if (st + window.innerHeight < document.documentElement.scrollHeight) {
          document.body.classList.remove('scrolly');
        }
      }

      // lastScrollTop 에 현재 스크롤위치를 지정한다.
      lastScrollTop = st;
    }
  } else {
    detachEventListener();
  }
}

window.addEventListener('resize', function(){
  var timer = null;
  clearTimeout(timer);
  timer = setTimeout(function(){
    headerStyle();
  }, 300);
});

document.addEventListener('DOMContentLoaded', function () {
  headerStyle();
});