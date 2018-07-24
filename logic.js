var translator = new Translator();
var de_text = ''
var my_api = 'AIzaSyAgl4OmUYmATIEqbhlQNMbB-2H9HSdCpWQ'
var config1 = {
	from: 'de',
	to: 'en',
	api_key: my_api,
	callback: function(translatedText){
		return $('.en_sentence').append("<div class='container'>" + translatedText + "</div>")
	}
}
var config = {
    from: 'en',
    to: 'de',
    api_key: my_api, // use your own key
    callback: function (translatedText) {

    	bigText = translatedText.split('.')
        translate_de = bigText[0].trim().split(' ')
		translate_de = translate_de.sort(function() { return 0.5 - Math.random() });
		de_text = bigText[0].trim()
		for (let value of translate_de) {
			var i = $('.text_holder').append('<button id="texts" class="texts">' + value + ' </button>') 
		}
		bigText.shift()
// Handling of the words created. 
		$('.texts').each(function(){
			$(this).click(function(){
				var parent = $(this).parent()
				if(parent.is('.text_holder')){
					$(this).appendTo('.holder')
				} else if(parent.is('.holder')){
					$(this).appendTo('.text_holder')
				}	
			})
		})
		
		$('.help').click(function(){
			$('.en_sentence').append("<div class='container'>" + de_text + "</div>")
			var en_trans = translator.translateLanguage(de_text, config1);
		})
		$('.next').click(function(){
			$('.text_holder').text(' ')
			$('.holder').text(' ')
			$('.holder').css('border', '2px solid blue')
			translate_de = bigText[0].trim().split(' ')
			translate_de = translate_de.sort(function() { return 0.5 - Math.random() });
			de_text = bigText[0].trim()
			//$('.en_sentence').append(de_text)
			for (let value of translate_de) {
				var i = $('.text_holder').append('<button id="texts" class="texts">' + value + ' </button>') 
			} 
			$('.texts').each(function(){
				$(this).click(function(){
					var parent = $(this).parent()
					if(parent.is('.text_holder')){
						$(this).appendTo('.holder')
					} else if(parent.is('.holder')){
						$(this).appendTo('.text_holder')
					}	
				})
			})

			bigText.shift()
			
		})
    }
};


// handling the form
$( "#target" ).submit(function( event ) {
	$('.text_holder').text(' ')
	$('.holder').text(' ')
	$('.holder').css('border', '2px solid blue')
	var list_de = $('#text').val()
	translator.translateLanguage(list_de, config);
	event.preventDefault()
});


// checking to see if the text is right and turning green if it is.
$('.text_holder').click(function(){
	var text = $('.holder').text().trim()
	if(de_text == text){
		$('.holder').css('border', '2px solid green')
	}
})
console.log('Hello World')



