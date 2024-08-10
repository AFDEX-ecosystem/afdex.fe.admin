function tableCheck() {
  // 'tbl_choice' 클래스를 가진 모든 요소를 선택합니다.
  var tblChoices = document.querySelectorAll('.tbl_hover');

  // 각 'tbl_choice' 클래스 요소에 대해 반복합니다.
  tblChoices.forEach(function(tblChoice) {
    var checkAll = tblChoice.querySelector('input[name="tablecheck_all"]');
    var checks = tblChoice.querySelectorAll('input[name="tablecheck"]');
    var checkTotalCnt = checks.length;

    // checkAll 체크박스에 change 이벤트 리스너를 추가합니다.
    checkAll.addEventListener('change', function() {
      checks.forEach(function(check) {
        if (checkAll.checked) {
            check.checked = true;
            checkAll.checked = true;
            check.closest('tr').classList.add('check');
        } else {
            check.checked = false;
            checkAll.checked = false;
            check.closest('tr').classList.remove('check');
        }
      });
    });

    // 개별 check 체크박스에 change 이벤트 리스너를 추가합니다.
    checks.forEach(function(check) {
      check.addEventListener('change', function() {
        var checkSelected = Array.from(checks).filter(function(ch) {
            return ch.checked;
        });

        if (check.checked) {
            check.checked = true;
            check.closest('tr').classList.add('check');
        } else {
            check.checked = false;
            check.closest('tr').classList.remove('check');
        }

        if (checkSelected.length >= checkTotalCnt) {
            checkAll.checked = true;
        } else {
            checkAll.checked = false;
        }
      });
    });
  });
}