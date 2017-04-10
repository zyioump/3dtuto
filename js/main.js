$(document).ready(function() {


	//fullpage
    $('#fullpage').fullpage({
		anchors: ['intro', 'sommaire','fichier', 'stl'],
		sectionsColor: ['#050f10','#061113','#060f11', '#FFFFFF	'],
		menu: "#menu",
		css3: true,
		paddingTop:"6%",
		sectionSelector:"section",
		autoScrolling:true
	});


});
