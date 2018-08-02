
var data = null;
(function(window,document){
	'use strict';
	
	simpleroute.controlador('service',{

		getData : function(){
			getData_services();
		}

	});
})(window,document);


function getData_services () {
	// body... 
	var ajax = new XMLHttpRequest();
	var URL = "./data/services.json";

	ajax.open("GET", URL, true);
	ajax.setRequestHeader("Content-type", "application/json");

	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = JSON.parse(ajax.responseText);
			data = response;
			printServices(response);
		}
	};

	ajax.send(null);
}

function printServices (data) {
	// body... 
    var listContainer = document.getElementById("left-aside");
    var newList = document.createElement("ul");
    if(data)
    {
    	var id = "";
	    for(var i = 0 ; i < data.Servicios.length ; i ++)
	        {
	         /*   var newListItem = document.createElement("li");
				newListItem.setAttribute("onclick", "get_service('"+ data.Servicios[i]._id+"')");
				newListItem.appendChild(document.createTextNode(data.Servicios[i].Nombre));
				if(i===0){
					newListItem.classList.add('active');
					id = data.Servicios[i]._id;
	            }
	            newList.appendChild(newListItem);*/
	        }

	   // listContainer.appendChild(newList);	
    }

}

function get_service (id) {
	// body... 
	data.Servicios.forEach( function(element, index) {
		// statements
		if(element._id === id)
		{
    		var container = document.getElementById("service-content");
			container.innerHTML = "";
			var title = document.createElement("h3"), 
				text  = document.createElement('p'),
				img   = document.createElement('img');

			title.appendChild(document.createTextNode(element.Titulo));
			text.appendChild(document.createTextNode(element.Texto));
			img.setAttribute("src", element.image);
			container.appendChild(title);
			container.appendChild(text);
			container.appendChild(img);

			return false;
		}
	});

}