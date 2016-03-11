saludalosojos.run(function ($rootScope, $location){

	/**
	window.fbAsyncInit = function() {
		window.FB.init({
			appId  : fbconfig.appId,
			status : true, // check login status
			cookie : true, // enable cookies to allow the server to access the session
			xfbml  : true, // parse XFBML
			channelUrl : fbconfig.channel, // channel.html file
			version: 'v2.1'
		});
	};

	(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_LA/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	window.socket = io(fbconfig.node_server);
	**/

	var images = [
		/* Index */

		'img/bg-women.png',

		/* 404 */

		'img/404/ilustracion.png',

		/* agegate */

		'img/logo-salud.png',

		/* Descargas */

		'img/descargas/smart/wallpapers/Mobile-wallpapers-1.jpg',
		'img/descargas/smart/wallpapers/Mobile-wallpapers-2.jpg',
		'img/descargas/smart/wallpapers/Mobile-wallpapers-3.jpg',
		'img/descargas/smart/wallpapers/Mobile-wallpapers-4.jpg',
		'img/descargas/note/wallpapers/1920x1080/Chicas-campanario-1920x1080.jpg',
		'img/descargas/note/wallpapers/1600x1200/Chicas-campanario-1600x1200.jpg',
		'img/descargas/note/wallpapers/1366x768/Chicas-campanario-1366x768.jpg',
		'img/descargas/note/wallpapers/1024x768/Chicas-campanario-1024x768.jpg',
		'img/descargas/note/wallpapers/1920x1080/Dumi-wallpaper-1920x1080.jpg',
		'img/descargas/note/wallpapers/1600x1200/Dumi-wallpaper-1600x1200.jpg',
		'img/descargas/note/wallpapers/1366x768/Dumi-wallpaper-1366x768.jpg',
		'img/descargas/note/wallpapers/1024x768/Dumi-wallpaper-1024x768.jpg',
		'img/descargas/note/wallpapers/1920x1080/Ivana-wallpaper-1920x1080.jpg',
		'img/descargas/note/wallpapers/1600x1200/Ivana-wallpaper-1600x1200.jpg',
		'img/descargas/note/wallpapers/1366x768/Ivana-wallpaper-1366x768.jpg',
		'img/descargas/note/wallpapers/1024x768/Ivana-wallpaper-1024x768.jpg',
		'img/descargas/note/wallpapers/1920x1080/Lupe-wallpaper-1920x1080.jpg',
		'img/descargas/note/wallpapers/1600x1200/Lupe-wallpaper-1600x1200.jpg',
		'img/descargas/note/wallpapers/1366x768/Lupe-wallpaper-1366x768.jpg',
		'img/descargas/note/wallpapers/1024x768/Lupe-wallpaper-1024x768.jpg',
		'img/descargas/note/wallpapers/1920x1080/Mariana-wallpaper-1920x1080.jpg',
		'img/descargas/note/wallpapers/1600x1200/Mariana-wallpaper-1600x1200.jpg',
		'img/descargas/note/wallpapers/1366x768/Mariana-wallpaper-1366x768.jpg',
		'img/descargas/note/wallpapers/1024x768/Mariana-wallpaper-1024x768.jpg',

		'img/descargas/calendar.png',
		'img/descargas/linea.png',
		'img/descargas/menu/smart-on.png',
		'img/descargas/menu/smart-off.png',
		'img/descargas/menu/note-on.png',
		'img/descargas/menu/note-off.png',
		'img/descargas/menu/calendar-on.png',
		'img/descargas/menu/calendar-off.png',
		'img/descargas/note/note.png',
		'img/descargas/pin.png',
		'img/descargas/smart/phone.png',
		'img/descargas/pin.png',

		/* Footer */

		'img/footer/left.home.png',
		'img/footer/left.png',
		'img/footer/right.home.png',
		'img/footer/right.png',

		/* Home */

		'img/logo-salud.png',

		/* Menu */

		'img/menu/logo.png',

		/* Modelos */

		'img/share/share.png',
		'img/line.png',
		'img/share/twitter.png',
		'img/share/facebook.png',

		'modelos/mariana/1.jpg',
		'modelos/mariana/2.jpg',
		'modelos/mariana/3.jpg',
		'modelos/thumbnails/1.png',
		'modelos/ivana/1.jpg',
		'modelos/ivana/2.jpg',
		'modelos/ivana/3.jpg',
		'modelos/thumbnails/2.png',
		'modelos/lupe/1.jpg',
		'modelos/lupe/2.jpg',
		'modelos/lupe/3.jpg',
		'modelos/thumbnails/3.png',
		'modelos/dumi/1.jpg',
		'modelos/dumi/2.jpg',
		'modelos/dumi/3.jpg',
		'modelos/thumbnails/4.png'


	]

	$rootScope.loadImages = function(images, callback) {
		if (images.length == 0) {
			callback();
			return false;
		}
		var url = images.splice(0, 1)[0];
		var img = new Image();
		img.onload = function() {
			$rootScope.loadImages(images, callback);
		}
		img.src = url;
	}

	$rootScope.loadImages(images, function() {
		$rootScope.view_video = false;
		$location.path('/');
		$rootScope.$apply();
	});

});
