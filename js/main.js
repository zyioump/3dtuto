$(document).ready(function() {


	//fullpage
    $('#fullpage').fullpage({
		anchors: ['intro', 'sommaire','fichier', 'stl','soft', 'imprimante', 'filament'],
		sectionsColor: ['#FFFFFF','#FFFFFF','#FFFFFF', '#FFFFFF	','#FFFFFF'],
		menu: "#menu",
		css3: true,
		paddingTop:"6%",
		sectionSelector:"section",
		autoScrolling:true
	});


});
