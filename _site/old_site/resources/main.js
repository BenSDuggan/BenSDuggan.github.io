var menuMainImageHeight;
var menuMainContainer;

/* Fix menu bar to top of page. */
	(function() {
		$(window).scroll(function(){
            if($('.menuMainImage:visible').css('height') !== undefined) {
                menuMainImageHeight = $('.menuMainImage:visible').css('height').split('px');
                menuMainContainer = $('.menuMain-container-rel:visible').css('height');
                if ( $(this).scrollTop() >= menuMainImageHeight[0] ){ 
                    $(".menuMain-container-rel").addClass("menuMain-container-fix");
                    $(".bodyContain").css('margin-top', menuMainContainer);
                } else { 
                    $(".menuMain-container-fix").removeClass("menuMain-container-fix");
                    $(".bodyContain").css('margin-top', '0px');
                }
            }
		});
	})();


//Ajust the page height when page is called with #
$(document).ready(function (){
    $('.menuA').click(function(e) {
        //Move screen
        var moveID = e.currentTarget.getAttribute('href').split('Home.html#');
        var div_height = $('#'+moveID[1]).offset().top - 50;
        window.scrollTo(0, div_height);
        
        //Add to url
        var url = window.location.href.split('#');
        if(url[1] === undefined) {
            history.pushState('', moveID[1], '#'+moveID[1]);
        } else {
            history.pushState('', moveID[1], '#'+moveID[1]);
        }
       
        e.preventDefault();
    });
});


//Load projects
$(document).ready(function() {
   $.ajax({
        type: "POST",
        url: "resources/projects/getLastNProjects.php",
        data: {id: 2},
        success: function(data) {
            console.log(data);
            if(data.charAt(0) === "S") {
                console.log('Success');
                var raw = data.split('Success: ');
                var results = JSON.parse(raw[1]);
                for(var i=0; i<Object.keys(results).length; i++) {
                    $entry = results[i][0];
                    $('.projectSummery').append('<div class="projectSummer-entry"><a href="projects.html?id=' + $entry["id"] + '"><h3 title="Project Name">' + $entry["title"] +'</h3><p title="Project Summery">' + $entry["des"] + '</p></a></div>');
                }
            }            
            else {
                console.log('Error');
                console.log(data);
                $('.projectSummery').append("<p>Could not load project preview.</p>");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log("Status: " + textStatus + "<br />Error: " + errorThrown);
            $('.projectSummery').append("<p>Could not load project preview.</p>");
        } 
    }); 
});