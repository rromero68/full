//	HYPE.documents["full"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="full.hyperesources",c="full",e="full_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/full_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"fullScreenWorks",source:"function(hypeDocument, element, event) {\t\n\tvar docElm = document.documentElement;\nif (docElm.requestFullscreen) {\n    docElm.requestFullscreen();\n}\nelse if (docElm.mozRequestFullScreen) {\n    docElm.mozRequestFullScreen();\n}\nelse if (docElm.webkitRequestFullScreen) {\n    docElm.webkitRequestFullScreen();\n}\n\n\n}",identifier:"24"},{name:"exitFullscreenWorks",source:"function(hypeDocument, element, event) {\tif (document.exitFullscreen) {\n    document.exitFullscreen();\n}\nelse if (document.mozCancelFullScreen) {\n    document.mozCancelFullScreen();\n}\nelse if (document.webkitCancelFullScreen) {\n    document.webkitCancelFullScreen();\n}\n\t\n}",identifier:"26"},{name:"fullScreenToggle",source:"function(hypeDocument, element, event) {\t\n\tdb = document.body;\n\t// var isfullscreen is defined in Head HTML\n\tif(isfullscreen == false){\n\t\tvar docElm = document.documentElement;\nif (docElm.requestFullscreen) { docElm.requestFullscreen(); }\nelse if (docElm.mozRequestFullScreen) { docElm.mozRequestFullScreen(); }\nelse if (docElm.webkitRequestFullScreen) {\n    docElm.webkitRequestFullScreen(); }\n    isfullscreen = true;\n\n\t} else {\n\t\tif (document.exitFullscreen) { document.exitFullscreen(); }\nelse if (document.mozCancelFullScreen) { document.mozCancelFullScreen();}\nelse if (document.webkitCancelFullScreen) { document.webkitCancelFullScreen(); }\nisfullscreen = false;\n\t}\n\t}",identifier:"27"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Sc\u00e8ne sans titre",o:"1",X:[0]}],[{o:"3",p:"600px",cA:false,Y:600,Z:400,L:[],c:"#000000",bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Control temporal principal",z:3,b:[],a:[{f:"c",y:0,z:3,i:"e",e:1,s:0,o:"28"},{f:"c",p:2,y:3,z:0,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"24"}]},o:"kTimelineDefaultIdentifier"},{y:3,i:"e",s:1,z:0,o:"28",f:"c"},{f:"c",p:2,y:3,z:0,i:"ActionHandler",s:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["28"],n:"Taille sans titre","_":0,v:{"28":{c:598,d:398,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",M:1,N:1,A:"#D8DDE4",x:"visible",j:"absolute",O:1,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:1,l:0,D:"#D8DDE4",m:"#0433FF",P:1,n:"#FF2600",a:0,b:0}}}],{},g,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Cargando";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
