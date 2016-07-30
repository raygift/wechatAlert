function getQueryString(name) {        
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");        
	var r = window.location.search.substr(1).match(reg);        
	if (r != null)             return unescape(r[2]);        
	return null;    
}
//獲取用戶OpenId并判斷是否已註冊，未註冊則轉入註冊頁面，已註冊轉入報警頁面
function getUserOpenId() {
	var code = getQueryString("code");
	if(code==null){
		window.location.href = "http://yhr.gift/index.html";
	}
	var appId = "wx3ccd1d053dfe5fc5";
	var appSecret = "2e582d937aa2551e758f37a92e4aad06";

	$.ajax({
		type: "get", //用POST方式传输
		dataType: "jsonp", //数据格式:JSON
		url: 'http://202.121.199.198/SJCJXT/Helper/DataHandler.ashx?action=getOpenId_web&code=' + code + '&appid=' + appId + '&appsecret=' + appSecret,
		async: false, //是否异步
		jsonp: "callbackparam", //服务端用于接收callback调用的function名的参数
		jsonpCallback: "openid_jsonpCallback",
		success: function(obj) {
			openid = obj[0].openid;
			$.ajax({
				type: "get", //用POST方式传输
				dataType: "jsonp", //数据格式:JSON
				url: 'http://202.121.199.198/SJCJXT/Helper/DataHandler.ashx?action=checkRegister&openid=' + openid,
				async: false, //是否异步
				jsonp: "callbackparam", //服务端用于接收callback调用的function名的参数
				jsonpCallback: "wxid_jsonpCallback",
				success: function(obj) {
					if (obj[0].r == "noRegister") {
						//									console.log("未注册"+wxid); 
						window.location.href = "http://yhr.gift/register.html?openid=" + openid;
					} else {
						//									alert("已注册");
						window.location.href = "http://yhr.gift/LabAlert.html?openid=" + openid;
					}
				},
				error: function(errormsg) {
					console.log("1" + errormsg)

				}
			});

		},
		error: function(errormsg) {
			console.log("2" + errormsg)
				//						alert(errormsg.toString());
		}
	});
}