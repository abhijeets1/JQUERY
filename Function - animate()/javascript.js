$(document).ready(function() {

	console.log('Document is Ready')

	// Stored References
	content = $('#content')
	btn1 = $('#btn1')
	btn2 = $('#btn2')

	btn1.on('click', function() {
		content.animate(
			{
				opacity: 0.5,
				height: '250px',
				width: '250px',
			},
			1000
		)
	})

	btn2.on('click', function() {
		content.animate(
			{
				opacity: 1,
				height: '300px',
				width: '300px',
			},
			1000
		)
	})

})