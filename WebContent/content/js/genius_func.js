function funcMngr(){
	this.cookie = {};
}

funcMngr.prototype ={
		cookie : null,
		readCookie : function(cookies){
			var me = this;
			if(this.isNone(cookies) === false){
				(cookies.split("&")).forEach(function(v){
					var arr = v.split("=");
					arr[1] && (me.cookie[arr[0]] = arr[1]);
				});
			}
			return me.cookie;
		},
		replace : function(a,b,c){
			return a.replace(b,c);
		},
		checkBrowser : function(){
			var agent = navigator.userAgent.toLowerCase();
			if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
				return true;
			}else{
				return false;
			}

		},
		isNone : function(a){
			if(typeof(a) !== "undefined" && a !== "null" && a !== null && a !== ""){
				return false;
			}else{
				return true;
			}
		},
		isValidate : function(obj){
			validate = true;
			obj.find(":input").each(function(){
				var $obj = $(this),
					id = $obj.attr('id'),
					name = $obj.attr('name'),
					type = $obj.attr('type'),
					value = $.trim($obj.val());
				if ( type == undefined )
						type	= $obj[0].nodeName ;
				switch(type.toLowerCase()){
					case "submit":
					case "button":
					case "file":
					case "select":
					case "radio":
					case "checkbox":
						break;
					case "hidden":
						break;
					default:
						if(value===""){
							validate = false;
							$obj.popover({content: $obj.attr('placeholder'), placement:"bottom"}).popover("show").on('shown.bs.popover',function(){
								setTimeout(function() {$obj.popover('hide')},3000);
							}).on('focus',function(){
								$obj.val("");
								$obj.popover('destroy');
							});
						}
						break;
				}

			});
			return validate;
		},
		fix_height : function() {
			var navheight = $(".top-content > .navbar").height();
			$("#page-wrapper").css('top',navheight);
			$("#sidenavbar").css('top',navheight);

		  var heightWithoutNavbar = $("body > #wrapper").height() - 61;
      $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

      var navbarHeigh = $('nav.navbar-default').height();
      var wrapperHeigh = $('#page-wrapper').height();

      if (navbarHeigh > wrapperHeigh) {
        $('#page-wrapper').css("min-height", navbarHeigh + "px");
      }

      if (navbarHeigh < wrapperHeigh) {
        $('#page-wrapper').css("min-height", $(window).height() + "px");
      }

      if ($('body').hasClass('fixed-nav')) {
        if (navbarHeigh > wrapperHeigh) {
          $('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
        } else {
          $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
        }
      }

    }

};
