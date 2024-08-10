/**
 * table 관련 이벤트
 */
function toggleCheckClass(element, addClass) {
  if (element.checked) {
    element.closest('tr').classList.add(addClass);
  } else {
    element.closest('tr').classList.remove(addClass);
  }
}

function tableCheck() {
  var tblChoices = document.querySelectorAll('.tbl_hover');

  tblChoices.forEach(function(tblChoice) {
    var checkAll = tblChoice.querySelector('.checked_all');
    var checks = tblChoice.querySelectorAll('.checked');
    var checkTotalCnt = checks.length;

    checkAll.addEventListener('change', function() {
      checks.forEach(function(check) {
          check.checked = checkAll.checked;
          toggleCheckClass(check, 'check');
      });
    });

    checks.forEach(function(check) {
      check.addEventListener('change', function() {
        var checkSelected = Array.from(checks).filter(function(ch) {
            return ch.checked;
        });

        checkAll.checked = checkSelected.length === checkTotalCnt;
        toggleCheckClass(check, 'check');
      });
    });
  });
}