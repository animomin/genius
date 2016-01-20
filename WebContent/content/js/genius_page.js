/**
 * http://usejsdoc.org/
 */

function pageMngr(){
	//this.me = this;
	this.handle = {};
	this.formhandle = {};
	this.handle["/"] = this.ShowMain;
	this.handle["/index.asp"] = this.ShowMain;
	this.handle["/qna_list.asp"] = this.Showqna;
	this.handle["/qna_view.asp"] = this.Showqna;
	this.handle["/qna_write.asp"] = this.Showqna;
	this.handle["/signup.asp"] = this.ShowSignin;

	this.handle["/sports/cross.asp"] = this.ShowGenius;					//크로스
	this.handle["/sports/vs.asp"] = this.ShowGenius;						//승무패
	this.handle["/sports/special.asp"] = this.ShowGenius;				//스페셜
	this.handle["/sports/handy.asp"] = this.ShowGenius;					//핸디
	this.handle["/realtime/racing.asp"] = this.ShowGenius;			//달팽이
	this.handle["/realtime/ladder.asp"] = this.ShowGenius;			//사다리
	this.handle["/realtime/power.asp"] = this.ShowGenius;				//파워볼
	this.handle["/public/betting.asp"] = this.ShowGenius;				//베팅현황
	this.handle["/public/gameresult.asp"] = this.ShowGenius;		//경기결과
	this.handle["/public/charge.asp"] = this.ShowGenius;				//충전
	this.handle["/public/excharge.asp"] = this.ShowGenius;			//환전
	this.handle["/bbs/board.asp"] = this.ShowGenius;						//게시판
	this.handle["/public/service.asp"] = this.ShowGenius;				//규정
	this.handle["/public/customer.asp"] = this.ShowGenius;			//고객센터

	this.formhandle["form-login"] = this.Gologin;

	for(var i in this.handle){
		console.log(i);
	}
}

pageMngr.prototype = {
		me : null,
		handle : null,
		formhandle : null,
		route : function(url, param){
			if(typeof(this.handle[url]) === "function"){
					return this.handle[url](url, param);
			}else{
					//location.href = "/error.asp?state=404";
			}
		},
		formRoute : function(frmid,frm){
			if(typeof(this.formhandle[frmid]) === "function"){
					return this.formhandle[frmid](frm);
			}else{
					//location.href = "/error.asp?state=404";
			}
		},
		ShowMain : function(url, param){
			var me = this;
			//if(fMng.isNone(param) !== true){
			if(!fMng.isNone($.cookie("user"))){
				//location.href =  "/view/main.asp";
				$("#main").load('/view/main.asp', function(response, status, xhr){
					if(status == "error"){
						 $("#main").load('/view/error.asp');
						 return false;
					 }
					 $(this).addClass('animated').addClass('fadeIn');

				});
			}
		},
		Showqna : function(url, param){
			var me = this;
			//location.href = '/view/qna' + url;
			$("#main").load('/view/qna' + url,  function(response, status, xhr){
				if(status == "error"){
					 $("#main").load('/error.asp',{status:'404', res : response, x : xhr});
					 return false;
				 }

			});
		},
		ShowSignin : function(url,param){
			var me = this;
			//location.href = '/view/member' + url;
			$("#main").load('/view/member' + url,  function(response, status, xhr){
				if(status == "error"){
					 $("#main").load('/error.asp',{status:'404', res : response, x : xhr});
					 return false;
				 }

				 for(var i in banklist){
					 console.log($("#sign_bank"));
				 	 $("#sign_bank").append("<option value='" + banklist[i] + "'>" +  banklist[i] + "</li>");
				 }

			});
		},
		Gologin : function(frm){
			//여기 로그인 ajax가 필요함, 일단 쿠키에 넣어줌
			var date = new Date();
			date.setTime(date.getTime() + (60*60*1000));		// 1시간만 유지
			$.cookie("user",frm.find("#mem_id").val(),{ expires : date });
			var attr = {
					'action' : '/index.asp',
					'method' : 'post'
			};
			return attr;
		},
		ShowGenius : function(url,param){
			var me = this;

			/*개발할때 지우자*/
			if(url.lastIndexOf('/sports/')>=0){
				url = '/sports/cross.asp';
			}

			$("#page-wrapper").load('/view'+url, function(response, status, xhr){
				if(status == "error"){
					 $("#main").load('/error.asp',{status:'404', res : response, x : xhr});
					 return false;
				 }
				 //$(this).removeClass('animated').removeClass('fadeIn')
				 //.addClass('animated').addClass('fadeIn');
				fMng.fix_height();

				$("div.sidebard-panel").affix({});

				setInterval(fMng.timeClock($("#Date")),1000);
			});
		}
};
