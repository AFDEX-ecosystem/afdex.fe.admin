/**
 * header 관련 이벤트
 */
var windowWidth = window.innerWidth;

function eventDo() {
    //pc 작동
    var gnbItems = document.querySelectorAll('.gnb_1depth > li');
    var gnbLinks = document.querySelectorAll('.gnb_1depth > li > a');
    var gnbSubMenuList = document.querySelectorAll('.gnb_submenu .gnb_list');

    document.querySelector('.gnb_submenu').style.maxHeight = "0";

    function gnbMouseEnter(event) {
        gnbLinks.forEach(function (link) {
            link.classList.remove('on');
            document.querySelector('.gnb_submenu').classList.remove('on');
        });
        event.currentTarget.querySelector('a').classList.add('on');
        document.querySelector('.gnb_submenu').style.maxHeight = document.querySelector('.gnb_submenu').scrollHeight + 'px';
        document.querySelector('.gnb_submenu').classList.add('on');
    }

    function gnbMouseLeave() {
        document.querySelector('.gnb_submenu').style.maxHeight = '0';
        gnbLinks.forEach(function (link) {
            link.classList.remove('on');
            document.querySelector('.gnb_submenu').classList.remove('on');
        });
    }

    function gnbSubMouseEnter() {
        document.querySelector('.gnb_submenu').style.maxHeight = document.querySelector('.gnb_submenu').scrollHeight + 'px';
        document.querySelector('.gnb_submenu').classList.add('on');
    }

    function gnbSubMouseLeave() {
        document.querySelector('.gnb_submenu').style.maxHeight = '0';
        document.querySelector('.gnb_submenu').classList.remove('on');
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
        document.querySelector('.gnb_submenu').style.maxHeight = document.querySelector('.gnb_submenu').scrollHeight + 'px';
        document.querySelector('.gnb_submenu').classList.add('on');
    }

    function attachEventListener() {
        gnbItems.forEach(function (item) {
            item.addEventListener('mouseenter', gnbMouseEnter);
            item.addEventListener('mouseleave', gnbMouseLeave);
        });

        document.querySelector('.gnb_submenu').addEventListener('mouseenter', gnbSubMouseEnter);
        document.querySelector('.gnb_submenu').addEventListener('mouseleave', gnbSubMouseLeave);

        gnbSubMenuList.forEach(function (item) {
            item.addEventListener('mouseenter', gnbSubMenuListItemEnter);
            item.addEventListener('mouseleave', gnbSubMenuListItemLeave);
        });

        document.querySelector('.header_top').addEventListener('mouseenter', headerTopMouseEnter);
        document.querySelector('.btn_menu').addEventListener('click', hamburgerClick);
    }

    attachEventListener();
}

function eventDo2() {
    //mobile 작동
    function gnbSubMouseEnter() {
        document.querySelector('.gnb_submenu').style.maxHeight = 'inherit';
        document.querySelector('.gnb_submenu').classList.add('on');
    }

    function gnbSubMouseLeave() {
        document.querySelector('.gnb_submenu').style.maxHeight = 'inherit';
        document.querySelector('.gnb_submenu').classList.add('on');
    }

    function headerTopMouseEnter() {
        document.querySelector('body').classList.remove('scrolly');
    }

    function hamburgerClick() {
        document.querySelector('.gnb_submenu').classList.add('on');
    }

    function detachEventListener() {
        document.querySelector('.gnb_submenu').addEventListener('mouseenter', gnbSubMouseEnter);
        document.querySelector('.gnb_submenu').addEventListener('mouseleave', gnbSubMouseLeave);
        document.querySelector('.header_top').addEventListener('mouseenter', headerTopMouseEnter);
        document.querySelector('.btn_menu').addEventListener('click', hamburgerClick);
    }

    detachEventListener();
}

function headerStyle() {

    let didScroll;
    let lastScrollTop = 0;
    const delta = 0; // 동작의 구현이 시작되는 위치

    window.addEventListener('scroll', function (event) {
        didScroll = true;

        setInterval(function () {
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
}

window.addEventListener('resize', function () {
    var timer = null;
    clearTimeout(timer);
    timer = setTimeout(function () {
        headerStyle();
    }, 300);
});

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        headerStyle();
        if (windowWidth > 1025) {
            eventDo();
        } else {
            eventDo2();
        }

        const mediaEvent1 = window.matchMedia("(min-width: 1025px)");
        const mediaEvent2 = window.matchMedia("(max-width: 1024px)");

        function x(mediaEvent1) {
            if (mediaEvent1.matches) {
                headerStyle();
                eventDo();
            }
        }

        function y(mediaEvent2) {
            if (mediaEvent2.matches) {
                headerStyle();
                eventDo2();
            }
        }

        mediaEvent1.addListener(x);
        mediaEvent2.addListener(y);
    }, 1000)
});
