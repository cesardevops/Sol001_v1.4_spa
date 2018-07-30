(function(window, document){

	'use strict';

	var inicio = function(){
		var elemento = null,
			marco = null,
			rutas = {},
			controladores ={},
			controladorActual,
			simpleroute = {
				getId: function(id){
					elemento = document.getElementById(id);
					return this;
				},

				get: function(id){
					return document.getElementById(id);
				},
				noSubmit: function(){
					elemento.addEventListener('submit',function(e){
						e.preventDefault();
					},false);
					return this;
				},
				controlador: function(name, controller){
					controladores[name] = {'controller':controller};
				},
				getctrl:function(){
					return controladorActual;
				},
				enrutar: function(){
					marco = elemento;
					return this;
				},
				ruta : function(route, plantilla, controller, fnCarga){
					rutas[route] = 	{
										'plantilla': plantilla,
										'controlador': controller,
										'carga': fnCarga
									};
					return this;
				},

				manejadorRutas: function(){
					var hash = window.location.hash.substring(1) || '/',
						destino = rutas[hash];
						var ajax = new XMLHttpRequest();

					if(destino && destino.plantilla){
						/*ajax.addEventListener('load',function(){
							//console.log(this.responseText);
							marco.innerHTML = this.responseText;
						}, false);*/

						if (destino.controlador) {
							controladorActual = controladores[destino.controlador].controller;
						}
						var ajax = new XMLHttpRequest();
						ajax.onreadystatechange = function() {
							if (ajax.readyState == 4 && ajax.status == 200) {
								//var response = this.responseText;
								//console.log(response);
								marco.innerHTML = this.responseText;
								if(typeof(destino.carga) === 'function'){
									destino.carga();
								}
							}
						};
						ajax.open('get',destino.plantilla, true);
						ajax.send(null);

					}else{
						window.location.hash='#/';
					}
				}
			};

		return simpleroute;
	}

	if(typeof window.simpleroute === 'undefined'){
		window.simpleroute = inicio();
		window.addEventListener('load', simpleroute.manejadorRutas, false);
		window.addEventListener('hashchange', simpleroute.manejadorRutas, false);
	} else {
		console.log('Libreria simpleroute.js duplicada');
	}

})(window, document);