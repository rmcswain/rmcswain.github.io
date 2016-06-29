var state = 'color';

$('#toggle_button').click(function(){

   if(state == 'color'){
   		// change from color to black and white
   		$('*').addClass('black-and-white');
   		alert('Yay! You just saved enough energy to shut down 2 Internet servers :)');
   		state = 'bw';
   }

   else {
   		// change from black and white to color
   		$('*').removeClass('black-and-white');
   		alert('Toggle the switch to save energy and extend the life of your computer');
   		state = 'color';
   }

});