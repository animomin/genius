var pMng,fMng;
var qnaMng;
var uCookie;

$(document).on("ready",function(){
	
	
	pMng = new popupMngr();
	fMng = new funcMngr();
	uCookie = fMng.readCookie($.cookie("user"));
	
	console.log(location);
	pMng.popupRouter(location, uCookie);	
	
})
/**
 * 문의하기 게시판 글 클릭 이벤트
 */
.on('click','a.qna_list_item',function(event){
	event.preventDefault();	
	qnaMng.bbs_id = 1; //parseInf($(this).attr('id'));  'qna 리스트 아이디를 주면됨.
	//qnaMng.bbs_content = qnaMng.bbs_list[qnaMng.bbs_id];  '선택한 게시글의 내용을 로드	
	pMng.ShowPassword();
})
.on('click','a#btn_password',function(event){
	event.preventDefault();
	var link = $(this).attr('href');
	
	if(fMng.isNone($("#popup_password").find("#pwd_pwd").val()) === false){
		location.href = link;
	}else{
		$("#popup_password").modal('hide');
	}
	
});

/*
.on('click','.popup_btn',function(event){
	
	var id = $(this).attr('id');
	switch(id.toLowerCase()){
		case 'btn_reg': 
			break;
		case 'btn_qna':						
			pMng.popup.login.modal('hide').on('hidden.bs.modal',function(event){
				pMng.beforepopup = pMng.curpopup;
				pMng.curpopup = null;							
				pMng.ShowQnA();
			});
			break;
		case 'btn_viewexit':
			pMng.popup.qnaview.modal('hide').on('hidden.bs.modal',function(event){
				pMng.beforepopup = null;
				pMng.ShowQnA();
			});
			break;
		case 'btn_qnaexit':
			qnaMng = null;
			pMng.popup.qna.modal('hide');
			break;
		case 'btn_password':
			var p = $.trim($("#pwd_pwd").val());
			//var i = $.trim($("#qna_item_id").val());
			$("#pwd_pwd").val("");
			//$("#qna_item_id").val("");
			
				pMng.popup.pwd.modal('hide').on('hidden.bs.modal',function(event){
					if(fMng.isNone(p) !== false){	//비밀번호가 비어있다  다시 리스트로 돌아간다.
						qnaMng.bbs_id = null;
						pMng.curpopup = pMng.beforepopup ;
					}else{
						//
						// 비밀번호가 들어있다 
						// qna 게시판 테이블에서 비밀번호 일치여부를 확인한고 qna_view.asp로 연결해준다.
						// qnaMng.bbs_content.bbs_pwd == p 물어보면됨.
						// 
						pMng.popup.qna.modal('hide');
						
					}
				});
			break;
		case 'btn_qnawrite':
			qnaMng.bbs_id = null;
			pMng.popup.qna.modal('hide');
			break;
		case 'btn_qnasave':
			pMng.popup.qnawrite.modal('hide').on('hidden.bs.modal',function(event){
				toastr["success"]("저장되었습니다.");
				pMng.curpopup = pMng.beforepopup;
				pMng.beforepopup = null;
				pMng.ShowQnA();
			});
			break;
		case 'btn_writeexit':
			pMng.popup.qnawrite.modal('hide').on('hidden.bs.modal',function(event){
				pMng.curpopup = pMng.beforepopup;
				pMng.beforepopup = null;
				pMng.ShowQnA();
			});			
			break;
	}

})
.on('click','a.qna_list_item',function(event){
	event.preventDefault();
	qnaMng.bbs_id = 1; //parseInf($(this).attr('id'));  'qna 리스트 아이디를 주면됨.
	//qnaMng.bbs_content = qnaMng.bbs_list[qnaMng.bbs_id];  '선택한 게시글의 내용을 로드
	pMng.beforepopup = pMng.curpopup;
	pMng.curpopup = null;
	pMng.ShowPassword();
})
.on('hidden.bs.modal','#popup_qna',function(event){
	if(fMng.isNone(qnaMng) === false && fMng.isNone(qnaMng.bbs_id) === false){
		pMng.beforepopup = pMng.popup.qna;
		pMng.curpopup = null;
		pMng.ShowQnAView();
	}else if(fMng.isNone(qnaMng) === false && fMng.isNone(qnaMng.bbs_id) !== false){
		pMng.beforepopup = pMng.popup.qna;
		pMng.curpopup = null;
		pMng.ShowQnAWrite();	
	}else{
		pMng.curpopup = null;
		pMng.beforepopup = null;
		pMng.ShowLogin();
	}
});
*/