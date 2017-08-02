var template =Handlebars.templates["index"];

        var data={};

        Handlebars.registerHelper("linkto", function(url,name){
            var name= Handlebars.Utils.escapeExpression(name),
                  url= Handlebars.Utils.escapeExpression(url),
                  link="<a href=\'" + location.protocol +"//" + location.host + "/" + url + ".html\'>" + name + "</a>";
                return new Handlebars.SafeString(link);
        });

       //var compiladoHTML=compilar(data);
        document.getElementById("action").innerHTML += template(data);

//codigo para handlebars de la pagina 3
var templatePrices= document.getElementById('index2').innerHTML;
		var compilar= Handlebars.compile(templatePrices);

		var informacion = {
			paquete_tipo: [
				{
					tipo: "Básic Plan",
					precio: 29,
					lorem1: "Lorem ipsum dolor sit amet,",
					lorem2: "200MB",
					lorem3: 2,
					lorem4: 5,
					lorem5: " ",
					lorem6:" ",
					buy:"BUY NOW",
				},
				{
					tipo: "Silver Plan",
					precio:89,
					lorem1: "Lorem ipsum dolor sit amet,",
					lorem2: "200MB",
					lorem3: 2,
					lorem4: 5,
					lorem5: " ",
					lorem6:" ",
					buy:"BUY NOW",
				},
				{
					tipo: "Gold Plan",
					precio:29,
					lorem1: "Lorem ipsum dolor sit amet,",
					lorem2: "200MB",
					lorem3: 2,
					lorem4: 5,
					lorem5: " ",
					lorem6:" ",
					buy:"BUY NOW",
				},
				{
					tipo: "Platinum Plan",
					precio:29,
					lorem1: "Lorem ipsum dolor sit amet,",
					lorem2: "200MB",
					lorem3: 2,
					lorem4: 5,
					lorem5: " ",
					lorem6:" ",
					buy:"BUY NOW",
                },
                {
					tipo: "Gold Plan",
					precio:29,
					lorem1: "Lorem ipsum dolor sit amet,",
					lorem2: "200MB",
					lorem3: 2,
					lorem4: 5,
					lorem5: " ",
					lorem6:" ",
					buy:"BUY NOW",
				},
                {
					tipo: "Gold Plan",
					precio:89,
					lorem1: "Lorem ipsum dolor sit amet,",
					lorem2: "200MB",
					lorem3: 2,
					lorem4: 5,
					lorem5: " ",
					lorem6:" ",
					buy:"BUY NOW",
				},
                {
					tipo: "Gold Plan",
					precio:299,
					lorem1: "Lorem ipsum dolor sit amet,",
					lorem2: "200MB",
					lorem3: 2,
					lorem4: 5,
					lorem5: " ",
					lorem6:" ",
					buy:"BUY NOW",
				},
                {
					tipo: "Gold Plan",
					precio:699,
					lorem1: "Lorem ipsum dolor sit amet,",
					lorem2: "200MB",
					lorem3: 2,
					lorem4: 5,
					lorem5: " ",
					lorem6:" ",
					buy:"BUY NOW",
				},
			]
		}

		var compiladoHTML = compilar(informacion);
		document.getElementById("action-prices").innerHTML += compiladoHTML;
       
