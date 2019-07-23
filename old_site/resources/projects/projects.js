//Global Vars
$loadMore_Iterations = 1;

$('document').ready(function(){
    //Get URL to pick which projects to show.
    var url = window.location.href.split('id=');
    if(url[1] !== undefined) {
        viewProject(url[1]);
    }
    else {
        loadProjectList();
    }
    
    //Load more on button
    $('#loadMore-button').click(function(){
        loadMoreProjects();
    });
    
});
         
function loadProjectList() {
$(document).ready(function() {
   $.ajax({
        type: "POST",
        url: "resources/projects/getLastNProjects.php",
        data: {id: 10},
        success: function(data) {
            console.log(data);
            if(data.charAt(0) === "S") {
                $('#projectsList').show();
                console.log('Success');
                var raw = data.split('Success: ');
                var results = JSON.parse(raw[1]);
                displayListProjects(results);
            }            
            else {
                console.log('Error');
                console.log(data);
                $('.projectSummery').append("<p>Could not load project previews.</p>");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log("Status: " + textStatus + "<br />Error: " + errorThrown);
            $('.projectSummery').append("<p>Could not load project preview.</p>");
        } 
    }); 
});
}

function loadMoreProjects() {
    $.ajax({
        type: "POST",
        url: "resources/projects/getMoreNProjects.php",
        data: {id: 10, it: $loadMore_Iterations},
        success: function(data) {
            console.log(data);
            if(data.charAt(0) === "S") {
                console.log('Success');
                var raw = data.split('Success: ');
                var results = JSON.parse(raw[1]);
                displayListProjects(results);
                $loadMore_Iterations += 1;
            }            
            else {
                console.log('Error');
                console.log(data);
                $('#loadMore-button').hide();
                $('.projectSummery').append("<p>That's all the projects!</p>");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            console.log("Status: " + textStatus + "<br />Error: " + errorThrown);
            $('.projectSummery').append("<p>Could not load project preview.</p>");
        } 
    }); 
}

function displayListProjects(results) {
    for(var i=0; i<Object.keys(results).length; i++) {
        $entry = results[i][0];
        $('.projectSummery').append('<div class="projectSummer-entry"><a href="projects.html?id=' + $entry["id"] + '"><h3 title="Project Name">' + $entry["title"] +'</h3><p title="Project Summery">' + $entry["des"] + '</p></a></div>');
    }
}
            
function viewProject(ID) {
    $.ajax({
            type: "POST",
            url: "resources/projects/projectGet.php",
            data: {id: ID},
            success: function(data) {
		console.log(data);
                $('#message').empty();
                if(data.charAt(0) === "S") {
                    console.log('success');
                    $('#message').removeClass('good');
                    $('#message').removeClass('bad');
                    var raw = data.split('Success: ');
                    var results = JSON.parse(raw[1]);
                    displayProject(results);
                }
                else {
                    console.log('Error');
                    $('#message').append(data);
                    $('#message').removeClass('good');
                    $('#message').addClass('bad');
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                $('#message').append("Status: " + textStatus + "<br />Error: " + errorThrown);
                $('#message').removeClass('good');
                $('#message').addClass('bad');
            } 
        });
}

function displayProject(results) {
    $('#projectsView').show();
    for(c in results) {
        if(results[c].length < 1) {
            $('#project'+c).empty();
        }
        else {
            $('#project'+c).append(results[c]);
        }
    }
}