(function(window,document){

	simpleroute.getId('app-content').enrutar()
		.ruta('/', 'views/home/home.html',null,null)
		.ruta('/services', 'views/services/services.html','service',function(){
			simpleroute.getctrl().getData();
		})
		.ruta('/contact', 'views/contact/contact.html','contact',function(){
			simpleroute.getId('frm-contact').noSubmit();
		});

})(window, document);