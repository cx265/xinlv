var ua = navigator.userAgent.toLowerCase();
var sys = ua.match(/html5plus/);
if (sys != 'html5plus') {
	mui.openWindow = function openWindow(param, target, options) {
		if (param.target == '_blank') {
			window.open(param.url);
		} else {
			window.location.href = param.url;
		}
	}
};
mui(".module0").on('tap', 'a.module0',
	function() {
		mui.openWindow({
			id: 'address',
			url: 'address.html'
		});
	});
mui(".module1").on('tap', 'li.module1',
	function() {
		mui.openWindow({
			id: 'index',
			url: 'study.html'
		});
	});
mui(".module1").on('tap', 'li.module2',
	function() {
		mui.openWindow({
			id: 'index',
			url: 'travel/index.html'
		});
	});
mui(".module1").on('tap', 'li.module3',
	function() {
		mui.openWindow({
			id: 'index',
			url: 'live/default.htm'
		});
	});
mui("#wei").on('tap', '.mui-icon-weixin',
	function() {
		mui.openWindow({
			id: 'weixin',
			url: 'http://weixin.qq.com/'
		});
	});
mui("#wei").on('tap', '.mui-icon-weibo',
	function() {
		mui.openWindow({
			id: 'weibo',
			url: 'http://weibo.com/'
		});
	});