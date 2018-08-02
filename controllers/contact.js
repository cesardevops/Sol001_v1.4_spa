(function(window,document){
	'use strict';
	
	simpleroute.controlador('contact',{

		Enviar : function(form){
			form.reset();
		},

		addEvents : function(form){
			if(form){
				var focusInput = function(){
					this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error" , "");
				};

				var blurInput = function(){
					if(this.value <= 0){
						this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
					}
				};
				for (var i = 0; i < form.elements.length; i++) {
					if(form.elements[i].type == "text" || form.elements[i].type == "email" || form.elements[i].type == "textarea"){
						form.elements[i].addEventListener("focus", focusInput);
						form.elements[i].addEventListener("blur", blurInput);
					}
				}				
			}
		}

	});

})(window,document);
