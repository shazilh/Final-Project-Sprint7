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
       
