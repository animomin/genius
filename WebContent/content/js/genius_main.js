var pMng,fMng;
var qnaMng;
var uCookie;

$(document).on('ready',function(){
	pMng = new pageMngr();
	fMng = new funcMngr();
	uCookie = fMng.readCookie($.cookie("user"));
	if(location.pathname == "/index.asp")	pMng.route(location.pathname, uCookie);
	
})
.on('click','a.login_btn',function(event){
	event.preventDefault();
	switch($.trim($(this).attr('id'))){
		case "btn_reg":
			pMng.route($(this).attr('href'));
			break;
		case "btn_qna":
			pMng.route($(this).attr('href'), "list");
			break;
		case "btn_login":
			break;
		default:
			location.href = $(this).attr('href');
	}
})
.on('click','a.qna_btn', function(event){
	event.preventDefault();
	switch ($.trim($(this).attr('id'))) {
		case "btn_write":
			pMng.route($(this).attr('href'),"write");
			break;
		case "btn_list":
			pMng.route($(this).attr('href'),"list");
			break;
		default:
			location.href = $(this).attr('href');
	}
})
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
				pMng.route('/qna.asp','view');
			}
		});
	});

});
