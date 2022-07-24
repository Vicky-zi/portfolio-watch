$(document).ready(function () {


	// 購物車加(減)
	$('.shopping-cart').on('click', function (e) {
		e.preventDefault();
		const numberElement = document.querySelector(".number");
		const currentNumber = Number(numberElement.textContent);
		numberElement.textContent = currentNumber + 1;
	});
	// 購物車加(減)


	//搜尋
	$('.slide').click(function(event){
		$('.input-se').toggleClass('slide-open');
		$('.number-re').toggleClass('number-open');
	});

	//modal刪除事件
	$('#removeModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var title = button.data('title');
		var body = button.data('body');

		var modal = $(this);
		modal.find('.modal-title').text('確認' + title);
		modal.find('.modal-body').text(body);
	});
	$('.remove').click(function(){
		$('.removeitem').parent().remove();

	});

	// //更換麵包屑名稱
	$('#id1').click(function(even){
		$('#changename').text("舒適床罩");
	})
	$('#id2').click(function(even){
		$('#changename').text("好眠枕頭");
	})
	$('#id3').click(function(even){
		$('#changename').text("品味精選");
	})
	$('#id4').click(function(even){
		$('#changename').text("裝飾好物");
	})
	$('#id5').click(function(even){
		$('#changename').text("主題家居");
	})

});
