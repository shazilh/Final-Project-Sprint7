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

