$(document).ready(function() {

	console.log('Document is Ready')

	// Stored References
	content = $('#content')
	btn1 = $('#btn1')
	btn2 = $('#btn2')
	btn3 = $('#btn3')

	btn1.on('click', function() {
		content.slideUp(1000, function() {
			console.log('SlideUp Done')
		})
	})

	btn2.on('click', function() {
		content.slideDown(1000, function() {
			console.log('SlideDown Done')
		})
	})

	btn3.on('click', function() {
		content.slideToggle(1000, function() {
			console.log('SlideToggle Done')
		})
	})

})