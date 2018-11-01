function Tools(){
	this.http = "http://192.168.0.157/ "
}

Tools.prototype.getcookie = function(name){
	var coo = document.cookie.split("; ");
	for (var i=0;i<coo.length;i++) {
		var xcoo=coo[i].split("=");
		if (xcoo[0]==name) {
			return decodeURI(xcoo[1]);
		}
	}
}

Tools.prototype.getsearch = function(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
	var r = window.location.search.substr(1).match(reg); 
	console.log(r)
	if (r!=null) return (r[2]); return null; 
}


var cookieOject = {
	http:"http://192.168.0.157/ ",
	
//	ert={name:user,value:zhangsan,expires:时间}
	setcook:function(obj){
		var str = encodeURI(obj.name)+"="+encodeURI(obj.value);
		if (obj.expires) {
			str+=";expires="+obj.expires;

		}
		document.cookie = str;
	},
	
	del:function(nam){
		var mydate = new Date;
		mydate.setHours(-1);
		this.setcook({
			name:nam,
			expires:mydate
		})	
	},
	
	
	
	hascook:function(name){
		var coo = document.cookie.split("; ");
		for (var i=0;i<coo.length;i++) {
			var xcoo=coo[i].split("=");
			if (xcoo[0]==name) {	
				return true;
			}
		}
		return false;
	}
	

}
