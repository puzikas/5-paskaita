// var langeliai = document.getElementById('langeliai')

// for (var i = 0; i <= 100; i += 5) {
// 	langeliai.innerHTML += '<div class="col logo">'+i+'</div>';
// }

function generate() {

	var langeliai = document.getElementById('langeliai');

	langeliai.innerHTML = '';

	for (var i = 0; i < 101; i += 5) {
		console.log(i);
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		langeliai.innerHTML += '<div class="langeliai logo" style="background-color: rgb('+r+','+g+','+b+')">' + i + '</div>';

	}	
}

function show_items () {
	console.log('Showing');
}

function hide_items () {
	console.log('Hiding');
}