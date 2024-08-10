// /**
//  * popup 관련 이벤트
//  */
// //overlay popup open
// function overlayOpen() {
//   var popupWrap = document.querySelectorAll('.popup_wrap');
//   popupWrap.forEach(function(btnClose){
//     var popup = btnClose.closest('.overlay_popup');
//     var overlayBg = popup.querySelector('.overlay_bg');
//     if (popup.innerHTML.trim() !== '') {
//       document.querySelector('body').classList.add('overflow');
//       setTimeout(function() {
//         overlayBg.classList.add('on');
//       }, 500);
//     }
//   });
// }
//
// //overlay popup close
// function overlayClose() {
//   document.addEventListener('click', function(event) {
//     var overlayPopups = document.querySelectorAll('.overlay_popup');
//     overlayPopups.forEach(function(popup) {
//       if (!event.target.closest('.popup_wrap') && event.target.closest('.overlay_popup') === popup) {
//         popup.querySelector('.overlay_bg').classList.remove('on');
//         document.querySelector('body').classList.remove('overflow');
//         // popup.querySelector('.popup_wrap').style.display = "none";
//         setTimeout(function() {
//           popup.innerHTML = '';
//         }, 500);
//         setTimeout(function() {
//           popup.remove();
//         }, 600);
//       }
//     });
//   });
//
//   var closeButtons = document.querySelectorAll('.btn_popupclose');
//   closeButtons.forEach(function(btnClose) {
//     btnClose.addEventListener('click', function() {
//       var popup = btnClose.closest('.overlay_popup');
//       var overlayBg = popup.querySelector('.overlay_bg');
//       overlayBg.classList.remove('on');
//       document.querySelector('body').classList.remove('overflow');
//       // popup.querySelector('.popup_wrap').style.display = "none";
//       setTimeout(function() {
//         popup.innerHTML = '';
//       }, 500);
//       setTimeout(function() {
//         popup.remove();
//       }, 600);
//     });
//   });
// }
//
// //팝업 추가 감지
// function popupObserve() {
//   // 대상 노드
//   const targetNode = document.body;
//   // Mutation Observer 생성
//   const observer = new MutationObserver(function(mutationsList) {
//       mutationsList.forEach(function(mutation) {
//           if (mutation.type === 'childList') {
//             Array.from(mutation.addedNodes).forEach(function(node) {
//                 if (node.classList && node.classList.contains('overlay_popup')) {
//                   //overlay popup open
//                   overlayOpen();
//                   overlayClose();
//                 }
//             });
//           }
//       });
//   });
//   // Observer 설정
//   const config = { childList: true, subtree: true };
//   // 대상 노드 및 설정을 이용하여 Observer 시작
//   observer.observe(targetNode, config);
// }
//
// document.addEventListener('DOMContentLoaded', function () {
//   //팝업 추가 감지
//   popupObserve();
//   //overlay popup open
//   overlayOpen();
//   //overlay popup close
//   overlayClose();
// });
//
//   var closeButtons = document.querySelectorAll('.popup_close');
//   closeButtons.forEach(function(btnClose) {
//     btnClose.addEventListener('click', function() {
//       var popup = btnClose.closest('.overlay_popup');
//       var overlayBg = popup.querySelector('.overlay_bg');
//       overlayBg.classList.remove('on');
//       document.querySelector('body').classList.remove('overflow');
//       // popup.querySelector('.popup_wrap').style.display = "none";
//       setTimeout(function() {
//         popup.innerHTML = '';
//       }, 500);
//       setTimeout(function() {
//         popup.remove();
//       }, 600);
//     });
//   });
// }
//
// //팝업 추가 감지
// function popupObserve() {
//   // 대상 노드
//   const targetNode = document.body;
//   // Mutation Observer 생성
//   const observer = new MutationObserver(function(mutationsList) {
//       mutationsList.forEach(function(mutation) {
//           if (mutation.type === 'childList') {
//             Array.from(mutation.addedNodes).forEach(function(node) {
//                 if (node.classList && node.classList.contains('overlay_popup')) {
//                   //overlay popup open
//                   overlayOpen();
//                   overlayClose();
//                 }
//             });
//           }
//       });
//   });
//   // Observer 설정
//   const config = { childList: true, subtree: true };
//   // 대상 노드 및 설정을 이용하여 Observer 시작
//   observer.observe(targetNode, config);
// }
//
// document.addEventListener('DOMContentLoaded', function () {
//   //팝업 추가 감지
//   popupObserve();
//   //overlay popup open
//   overlayOpen();
//   //overlay popup close
//   overlayClose();
// });
