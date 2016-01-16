var pMng,fMng;
var qnaMng;
var uCookie;

$(document).on('ready',function(){
	pMng = new pageMngr();
	fMng = new funcMngr();
	//uCookie = fMng.readCookie($.cookie("user"));
	if(location.pathname == "/index.asp")	pMng.route(location.pathname, $.cookie("user"));
	// Add body-small class if window less than 768px
  fMng.fix_height();
})
/**
 * @biref 로그인 버튼
 */
.on('click','a.login_btn',function(event){
	event.preventDefault();
	pMng.route($(this).attr('href'));
})
/**
 * @brief 문의하기 리스트, 글쓰기 이벤트
 */
.on('click','a.qna_btn', function(event){
	event.preventDefault();
	switch ($.trim($(this).attr('id'))) {
		case "btn_write":
		case "btn_list":
			pMng.route($(this).attr('href'));
			break;
		default:
			location.href = $(this).attr('href');
	}
})
/**
 * @brief 문의하기 글목록 아이템 클릭
 */
.on('click','a.qna_list_item',function(event){
	event.preventDefault();
	$("div#popup_container").load("/view/popup/pop_pwd.asp",function(){
		$("#pop_pwd").modal('show')
		.on('shown.bs.modal',function(){
			$("#pop_pwd").find('#pwd').val("").focus();
		})
		.on('hidden.bs.modal',function(){
			var pwd = $("#pop_pwd").find('#pwd').val();
			pwd = $.trim(pwd);
			if(fMng.isNone(pwd)===false){
				pMng.route('/qna_view.asp');
			}
		});
	});

})
/**
 * @biref 사이드 메뉴 Show/hidden 이벤트
 * 새로 만들어야할 듯..
 */
.on('click','#navbar-menu',function(event){
	event.preventDefault();
	$("body").toggleClass("mini-navbar");
})
/**
 *
 */
.on('click','a.sidenav_item',function(event){
	event.preventDefault();
	pMng.route($(this).attr('href'));
})
/**
 * @brief 폼 submit 이벤트
 */
.on('submit', 'form', function(event){
	//console.log("submit");
	var validate = true;
	$(this).find(":input").each(function(){
		var $obj = $(this),
				id = $obj.attr('id'),
				name = $obj.attr('name'),
				type = $obj.attr('type'),
				value = $.trim($obj.val());
			if ( fMng.isNone(type) === true )type	= $obj[0].nodeName ;
			switch(type.toLowerCase()){
				case "submit":
				case "button":
				case "file":
				case "select":
					console.log("select value", value);
					break;
				case "radio":
				case "checkbox":
					break;
				case "hidden":
					break;
				default:
					if(value===""){
						validate = false;
						$obj.popover({content: $obj.attr('placeholder'), placement:"bottom"}).popover("show").on('shown.bs.popover',function(){
							setTimeout(function() {$obj.popover('hide');},3000);

						}).on('focus',function(){
							$obj.val("");
							$obj.popover('destroy');
						});
					}
					break;
			}
			if(validate===false){
				event.preventDefault();
				return false;
			}
	});
	//event.preventDefault();
	$(this).attr(pMng.formRoute($(this).attr('id'),$(this)));
});


$(window).bind("load resize scroll", function () {
    //if (!$("body").hasClass('body-small')) {
        fMng.fix_height();
  //  }
});
