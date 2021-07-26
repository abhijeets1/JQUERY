$(document).ready(function() {

	console.log('Document Ready')
	
	// Stored References
	content = $('#content')
	btn1 = $('#btn1')
	btn2 = $('#btn2')
	btn3 = $('#btn3')

	// Events on Button 1
	btn1.on('click', function() {

		content.fadeOut(1000, function() {
			console.log('Fadded Out')
		})
		content.fadeIn(1000, function() {
			console.log('Fadded In')
		})

	})

	// Events on Button 2
	btn2.on('click', function() {

		content.fadeToggle(1000, function() {
			console.log('Toggled Fade')
		})

	})

	// Events on Button 3
	btn3.on('click', function() {

		content.fadeTo(1000, 0.5, function() {
			console.log('Fadded to 0.5')
		})

		content.fadeTo(1000, 1, function() {
			console.log('Fadded to 1')
		})

	})

})