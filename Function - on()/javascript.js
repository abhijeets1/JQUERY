$(document).ready(function() {

	console.log('Document Ready')

	content = $('#content')

	content.on(
		{
			'click': function() {
				content.html('Mouse Clicked')
				console.log('Mouse Clicked')
			},
			'mouseenter': function() {
				content.html('Mouse Entered')
				console.log('Mouse Entered')
			},
			'mouseleave': function() {
				content.html('Mouse Left')
				console.log('Mouse Left')
			},
		}
	)

})