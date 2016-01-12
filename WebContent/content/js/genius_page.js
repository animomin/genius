/**
 * http://usejsdoc.org/
 */

function pageMngr(){
	this.handle = {};
	this.handle["/"] = this.ShowMain;
	this.handle["/index.asp"] = this.ShowMain;
	this.handle["/qna.asp"] = this.Showqna;
	this.handle["/signin.asp"] = this.ShowSignin;
}

pageMngr.prototype = {
		handle : null,
		route : function(url, param){
			if(typeof(this.handle[url]) === "function"){
					return this.handle[url](param);
			}else{
					//location.href = "/error.asp?state=404";
			}
		},

		ShowMain : function(param){
			if(fMng.isNone(param) === true){
				location.href =  "/view/main.asp";
			}
		},

		Showqna : function(param){
			switch(param){
				case "list":
					location.href =  "/view/qna/qna_list.asp";
					break;
				case "write":
					location.href =  "/view/qna/qna_write.asp";
					break;
				case "view":
					location.href =  "/view/qna/qna_view.asp";
					break;
			}
		},

		ShowSignin : function(){
			location.href = "/view/member/signin.asp"; 
		}

};
