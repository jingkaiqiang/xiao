var xml;
if(window.XMLHttpRequest){
	xml=new XMLHttpRequest()
}else{
	xml=new ActiveXObject("Microsoft.XMLHTTP")
}
xml.open("GET","new_file.json",true)
xml.send();
xml.onreadystatechange=function(){
	if(this.readyState==4){
		var rea=JSON.parse(this.responseText);
		var obj=rea.nav;
		var nav=document.querySelectorAll(".nav-1");
		for(var i=0;i<obj.length;i++){
			nav[i].innerText=obj[i]
		}
		var hea=document.querySelector(".header img");
		hea.src=rea.header
		
		var ne=document.querySelectorAll(".neirong-1 img")
		var nei=rea.nei;
		for(var i=0;i<nei.length;i++){
			ne[i].src=nei[i]
		}
		var p=document.querySelectorAll(".neirong-1 p")
		var s=rea.p;
		for(var i=0;i<s.length;i++){
			p[i].innerText=s[i]
		}
		var t=document.querySelector(".tupian img")
		t.src=rea.tupian
		
		var shang=document.querySelector(".shangping img")
		var shan=document.querySelector(".shangping p")
		shang.src=rea.shangpin
		shan.innerText=rea.shang
		
		
	}
}

			// 服务器常见状态码
			// 200 - 请求成功
			// 301 - 资源（网页等）被永久转移到其它URL
			// 404 - 请求的资源（网页等）不存在
			// 500 - 内部服务器错误
			// 414 - 请求的URI过长（URI通常为网址），服务器无法处理




			//ajax请求状态码
			//0：请求未初始化
			//1：服务器连接已建立
			//2.请求已接受
			//3.请求处理中
			//4.请求已完成，且响应已就绪 