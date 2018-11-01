var lise=document.querySelectorAll("#leftsidebar li");
var subnavs=document.querySelectorAll("#subnav #subnav1")
var lio=document.querySelectorAll("#banners li")
var imgs=document.querySelectorAll("#bannerlogo img");
var bannerlogos=document.getElementById("bannerlogo")
var banner_btns=document.getElementById("banner_btn")
var subnav=document.getElementById("subnav")
var RoundMap=document.getElementById("RoundMap");
var left=document.getElementById("btn-left")
var right=document.getElementById("btn-right")
var index=0;
			for(var i=0;i<lise.length;i++){
             lise[i].index=i;
             lise[i].onmouseover=function(){
				for(var j=0;j<subnavs.length;j++){
					subnavs[j].style.display="none";
					lise[this.index].style.background="sandybrown";
				lise[this.index].style.color="#FFFFFF"
				}
				subnavs[this.index].style.display="block";
				subnav.style.display="block"
			}
             lise[i].onmouseout=function(){
             	var that=this;
				yy=setTimeout(function(){
				subnavs[that.index].style.display="none"
				},200)
				lise[this.index].style.background="white";
				lise[this.index].style.color="#000"
			}
   		  }
			  subnav.onmouseover=function(){
			subnav.style.display="block";
			clearTimeout(yy);
	}
   		  subnav.onmouseout=function(){
			      subnav.style.display="none";
          }
         var timer=setInterval(function(){
				index++
				change()
			},2000)

	function change(){
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.display="none";
				
				lio[i].style.background="rgba(0,0,0,0.5)";
			}
			if(index>imgs.length-1){
				index=0;
			}
			if(index<0){
				index=imgs.length-1;
			}
			//当前显示
			imgs[index].style.display="block";
			lio[index].style.background="rgba(255, 255, 255,0.5)";
			
		}
	    RoundMap.onmouseenter=function(){
	    	banner_btns.style.display="block";
			clearInterval(timer)
		}
	    RoundMap.onmouseleave=function(){
	    	banner_btns.style.display="none";
			timer=setInterval(function(){
					index++
					change()
			},2000)
		}
	for(var j=0;j<lio.length;j++){
			lio[j].index=j;
			lio[j].onclick=function(){
				
				index=this.index;
				change();
			}
		}
	left.onclick=function(){
			index--
			change();
		}
	right.onclick=function(){
			index++;
			change();	
	}
