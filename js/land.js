var str; var createNewCode = function () { 
    		var arr = ['0','1','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
    		str = ""; 
    		var strlength = 4; 
    		for(var i = 0; i < strlength; i++) { 
    			var num = Math.floor(Math.random()*arr.length);
    			str+= arr[num];
    		}; 
    		var btn = document.getElementById("rightcode"); 
    		btn.value = str;
    	} 
    	window.onload = createNewCode; 

			
		

