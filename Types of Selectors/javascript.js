$(document).ready(function() {

	console.log('Document Ready')

	// Element Selector
	$('p').click(function () {
		console.log('Element Clicked')
	})

	$('p').click()
	console.log('Done')

	$('#3rd').click()
	console.log('Done')

	$('.odd').click()
	console.log('Done')

})