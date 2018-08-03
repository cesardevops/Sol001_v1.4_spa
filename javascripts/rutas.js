	(function(window,document){

	simpleroute.getId('app-content').enrutar()
		.ruta('/', 'views/home/home.html',null,null)
		.ruta('/services', 'views/services/services.html','service',function(){
			simpleroute.getctrl().getData();
			simpleroute.getctrl().addEvents();
		})
		.ruta('/about', 'views/about/about.html',null,null)
		.ruta('/contact', 'views/contact/contact.html','contact',function(){
			simpleroute.getId('frm_contact').noSubmit();
			simpleroute.getctrl().addEvents(simpleroute.get('frm_contact'))
		});

})(window, document);