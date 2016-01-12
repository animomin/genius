/**
 * @brief Popup Manager
 */
var popupMngr = function(){	
	//TODO	
	this.popupsrc = "/view/popup/";		//팝업  템플릿 경로
	this.curpopup = null;					//현재 팝업 
	this.beforepopup = null;				//이전 팝업
	
	this.handle = {};
	this.handle["/"] = this.ShowLogin;
	this.handle["/index.asp"] = this.ShowLogin;	
	this.handle["/view/qna.asp"] = {};
	this.handle["/view/qna.asp"]["?pathname=qna_list"] = this.ShowQnA;
	this.handle["/view/qna.asp"]["?pathname=qna_write"] = this.ShowQnAWrite;
	this.handle["/view/qna.asp"]["?pathname=qna_view"] = this.ShowQnAView;	
	this.handle["/view/qna.asp"]["?pathname=password"] = this.ShowPassword;	//이건어케할까
};

popupMngr.prototype ={
	handle : null,
	popupsrc : null,
	curpopup : null,
	beforepopup : null,
	
	/**
	 * @brief 팝업 템플릿을 Blocking 방식으로 로드
	 * @param p	: Parent 팝업이 달라 붙을 대상
	 * @param url	: 템플릿 주소 
	 */
	LoadPopups : function(p,url){
		var me = this;
		if($.isArray(url) === false){
			$.ajax(
				{
					url: this.popupsrc + url,
					async : false,
					success : function(data){
						p.append(data);
					}
				}
			);
		}else{
			$.each(url,function(i,v){
				$.ajax(
					{
						url: me.popupsrc + v,
						async : false,
						success : function(data){
							p.append(data);
						}
					}
				);
			});
		}
	},
	
	popupRouter : function(url, cookie){
		if(fMng.isNone(url.search) === false){
			if(typeof this.handle[url.pathname][url.search] === "function"){
				return this.handle[url.pathname][url.search](cookie);
			}
		}else{
			if(typeof this.handle[url.pathname] === "function"){
				return this.handle[url.pathname](cookie);
			}
		}
	},
	
	ShowLogin : function(uCookie){
		var me = this;
		fMng = new funcMngr();
		
		if (fMng.isNone(uCookie["id"])===true){
			
			if($("html").find("#popup_login").length === 0) pMng.LoadPopups($("html"), "login.asp");
			
			$("#popup_login").modal({backdrop:'static', keyboard: false}).on('shown.bs.modal',function(event){
				$(this).find("#mem_id").focus();				
			});	
		}else{
			location.href="main.asp"
		}
	},
	
	ShowPassword : function(){
		var me = this;
		var p = "";

		if($("html").find("#popup_password").length === 0) pMng.LoadPopups($("html"), "password.asp");
		$("#popup_password").modal('show').on('shown.bs.modal',function(event){
			$(this).find("#pwd_pwd").val("").focus();
		});
	},
	
	ShowQnA : function(){
		var me = this;
		if($("html").find("#popup_qna").length === 0) pMng.LoadPopups($("html"), "qna.asp");
		$("#popup_qna").modal({backdrop: 'static', keyboard : false}).on('shown.bs.modal',function(event){
			qnaMng = new bbsMngr('qna');	// 현재는 qna 리스트를 불러올 수 없다.
		});
	},
	
	ShowQnAView : function(){ // bbsMngr 의 content를 받아와 뿌려주면됨.
		var me = this;
		if($("html").find("#popup_qna_view").length === 0) pMng.LoadPopups($("html"), "qna_view.asp");
		$("#popup_qna_view").modal({backdrop : 'static', keyboard : false});

	},
	
	ShowQnAWrite : function(){
		var me = this;
		if($("html").find("#popup_qna_write").length === 0) pMng.LoadPopups($("html"), "qna_write.asp");
		$("#popup_qna_write").modal({backdrop : 'static', keyboard : false});
	}
	/*
	ShowSetting : function(){
		var me = this;
		$("div#main").load(this.popupsrc + "setting.html",function(){
			$("#popup_setting").modal();
			$("form").on('submit',function(event){
				if(common.isValidate($(this)) == true){
					if(sMngr.SetServerInfo($(this)) === true){
						
					}else{
						event.preventDefault();
					}
				}else{
					event.preventDefault();
				}
			});	
		});		
	},
	
	ShowErrorMessage : function(msg){
		$("div#main").load(this.popupsrc + "errormessage.html",function(){
			$("#popup_error").modal();
			$("#message").text(msg);
			$("div.modal-content").append(button);			
		});
	}
	*/
};