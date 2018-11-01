var menuleft=document.querySelectorAll("#menu-left div");
var menucurrent=document.querySelectorAll("#menu-current li");
var menucurrents=document.querySelectorAll("#menu-current1 div");
var ps=document.querySelectorAll("#sellwell-area>p");
var lis=document.querySelectorAll("#sellwell-area li");
var phbcbooks=document.querySelectorAll("#sellwell-area>div");
var spans=document.querySelectorAll("#sellwell-area>span");
var liss=document.querySelectorAll("#sellwell li");
var uls=document.querySelectorAll("#sellwell-well ul");
var btns=document.querySelectorAll("#titlebar-btn li")
var divs=document.querySelectorAll("#commodity>div")



$.ajax({
				url:"../js/content.json",
				type:"get",
			}).done(function(res){
				var str="";
				var strs="";
				var strss="";
				console.log(res)
				$.each(res.rows,function(index,ele){
					str+='<div id="commodity-detailed" class="commodity-detailed" pid="'+ele.pig+'">'
					     +'<div id="commodity-color"></div>'
						 +'<div id="detailedimg">'
						 +'<img src="'+ele.imgsrc+'" style="width:103px;height:120px;margin: 30px 30px;"/></div>'
						 +'<p>'+ele.name+'</p>'
						 +'<div id="detailedp">'+ele.jiage+'</div>&nbsp;<span>'+ele.jianjie+'</span>'
					+'</div>'
				});
				$(".commodity-content").html(str)
				$.each(res.rownoe, function(index,ele){
					strs+='<div id="commodity-detailed" class="commodity-detailed">'
					      +'<div id="commodity-color"></div>'
						  +'<div id="detailedimg">'
						  +'<img src="'+ele.imgsrc+'" style="width:103px;height:120px;margin: 30px 30px;"/></div>'
						  +'<p>'+ele.name+'</p>'
						  +'<div id="detailedp">'+ele.jiage+'</div>&nbsp;<span>'+ele.jianjie+'</span>'
					      +'</div>'
				});
				$(".commodity-contents").html(strs)
				$.each(res.rowtwo, function(index,ele){
					strss+='<div id="commodity-detailed" class="commodity-detailed">'
					      +'<div id="commodity-color"></div>'
						  +'<div id="detailedimg">'
						  +'<img src="'+ele.imgsrc+'" style="width:103px;height:120px;margin: 30px 30px;"/></div>'
						  +'<p>'+ele.name+'</p>'
						  +'<div id="detailedp">'+ele.jiage+'</div>&nbsp;<span>'+ele.jianjie+'</span>'
					      +'</div>'
				});
				
				$(".commodity-contentss").html(strss)
            $(".commodity-detailed").click(function(){
            		window.location.href="detailsrows.html?pid="+$(this).attr("pid");
            })
		})

  for (var a=0;a<btns.length;a++) {
  	btns[a].ind=a;
  	btns[a].onmouseenter=function(){
  		for (var b=0;b<divs.length;b++) {
  			divs[b].style.display="none";
  			btns[b].style.border="0";
  			btns[b].style.borderBottom="1px solid black";
  			btns[b].style.background="rgba(180,180,180,0.2)";
  		}
  		divs[this.ind].style.display="block";
  		btns[this.ind].style.border="1px solid black";
  		btns[this.ind].style.borderBottom="0";
  		btns[this.ind].style.background="white";
  	}
  }

  for (var r=0;r<liss.length;r++) {
  	liss[r].ind=r;
  	liss[r].onmouseenter=function(){
  		for(var m=0;m<uls.length;m++){
  			uls[m].style.display="none";
  			liss[m].style.borderBottom="1px solid silver"
  		}
  		uls[this.ind].style.display="block";
  		liss[this.ind].style.borderBottom="0"
  	}
  }

     for (var h=0;h<lis.length;h++){
     	lis[h].ind=h;
     	lis[h].onmouseenter=function(){
     		for (var l=0;l<phbcbooks.length;l++) {
     			phbcbooks[l].style.display="none";
     			lis[l].style.display="block"
     		}
     	phbcbooks[this.ind].style.display="block";
     	lis[this.ind].style.display="none"
     	for(var p=0;p<ps.length;p++){
     		ps[p].style.display="block";
     		}
     	ps[this.ind].style.display="none"
     	}
     }
for (var i=0;i<menuleft.length;i++) {
	menuleft[i].index=i;
	menuleft[i].onmouseenter=function(){
		menuleft[this.index].style.backgroundPosition="-8px 0px";
		menuleft[this.index].style.transition="all 0.4s"
	}
	menuleft[i].onmouseleave=function(){
		menuleft[this.index].style.backgroundPosition="4px 0px";
		menuleft[this.index].style.transition="all 0.4s";
	}
}
for (var j=0;j<menucurrent.length;j++){
	menucurrent[j].index=j;
	menucurrent[j].onmouseenter=function(){
		for(var h=0;h<menucurrents.length;h++){
			menucurrents[h].style.display="none";
			menucurrent[h].style.borderBottom="1px solid silver";
		}
	menucurrents[this.index].style.display="block"
	menucurrent[this.index].style.borderBottom="0";
	}
}


