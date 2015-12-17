$(document).ready(function(){

	/*$.ajax({
		url: 'http://www.w3schools.com/website/customers_mysql.php',
		type: 'GET',
		dataType: 'json', //jQuery parse json
		success: function(data)
		{			
			console.log(data);
			
			var items = [];
			
			  $.each( data, function(i) {
				items.push( "<li id='" + data[i].Name + "'>" + data[i].Country + " : "+ data[i].City + "</li>" );
			  });
			 
			  $( "<ul/>", {
				"class": "my-new-list",
				html: items.join( "" )
			  }).appendTo(".main_container");
			  
		},
		error: function(er)
		{
			var _err=er;
			return false;
			//console.log(er.message);
		}
	});*/
	
	var html = '<div class="headerDiv">'
					+'<div class="headerDivBackgroundColor"></div>'
					+'<div class="headerDivBackgroundColor"></div>'	
					+'<div class="headerDivBackgroundColor"></div>'	
					+'<div class="headerDivBackgroundColor"></div>'	
					+'<div class="headerDivBackgroundColor"></div>'	
					+'<div class="headerDivBackgroundColor"></div>'	
				+'</div>';
	for(i=1; i<=4; i++)
	{
		$(html).insertAfter('#header');
	}
	
	var categoriesName = [
		{
			categoryName: ["Animals", "Cars", "Nature"]
			//postEntry: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
		}
	];
	
	var myArray = ["Animals", "Cars", "Nature"];
	
	$.each(myArray, function(index, value){
		//$('#menu').append('<li>'+value+'</li>');
		var menuList = '<li>'+value+'</li>';
		$('#menu').append(menuList);
		console.log(menuList);
	});
	
    $("#headerContainer").tmpl(categoryName).appendTo("#header");
 	
	/*$.ajax({
		url: 'header.html',
		//url: 'http://www.discoverlife.org/ed/tg/Building_Web_Pages/html_tags.html',
        type: 'GET',
        success: function(data)
		{
			console.log(data);
            //var content = $(data.responseText).text();
			//$("#main_container").html(content);
            //alert(content);
        }
    });*/
		
});