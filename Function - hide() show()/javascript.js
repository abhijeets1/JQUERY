$(document).ready(function() {

	console.log('Document Ready')
	
	content = $('#content')
	btn = $('#btn')

	btn.on('click', function() {
		content.hide(1000, function() {
			console.log('Hidden')
		})
		content.show(1000, function() {
			console.log('Shown')
		})
	})

})