/**
 * form 관련 이벤트
 */
//Date picker
function datePicker() {
	$('.datepick').each(function() {
		$(this).datepicker({
				changeMonth: true,
				changeYear: true,
				autoclose: true,
				format: "yyyy.mm.dd",
				language: 'ko',
		});
	});
}

// //jquery - select2
// $(document).ready(function () {
// 	//select2 설정
// 	$(".select_form select").select2({
// 		minimumResultsForSearch: -1,
// 	});
// 	//select2 설정
// 	$(".select2_form select").select2({
// 		formatNoMatches: function() {
// 			return '결과가 없습니다.';
// 		}
// 	});

// 	//Date picker
// 	datePicker();
			
// });

