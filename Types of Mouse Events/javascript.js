$(document).ready(function() {

	$('#1st').click(function() {
		console.log('Mouse Clicked')
	})

	$('#2nd').dblclick(function() {
		console.log('Mouse Double Clicked')
	})

	$('#3rd').hover(function() {
		console.log('Mouse Hovered')
	})

	$('#4th').mouseenter(function() {
		console.log('Mouse Entered')
	})

})