function reset() {
  $('.square').css({
    'background-color': 'black',
    'opacity': 1,
  });

}

function randomColor() {
  return Math.floor(Math.random()*256); // <0,255>
}

function resize() {
  var square_length = prompt('Enter new length for the grid', '');
  $('#squares-wrapper').empty();
  generateGrid(square_length);
}

function generateGrid(square_length) {
  var randomizedColor, currentOpacity;
  $wrapper=$('#squares-wrapper');
  $square = $('<div class="square"></div>');
  for (var i = 0; i < square_length; i++) {
    $wrapper.append($('<div class="row"></div>'));
  }
  var squareSize = Math.floor($('.row').width()/square_length); // calculates maximum width of a single square
  squareSize-=3; // deletes length of margin (from both sided, that's why 2)
  // iterates over all rows and adds square_length number of divs
  for (var j = 0; j < square_length; j++) {
    $('.row').append($('<div class="black_square"><div class="square"></div></div>'));
  }
  $('.square, .black_square').css('height', squareSize); // sets calculated dimensions to every .square obj
  $('.square, .black_square').css('width', squareSize);
  $('.square').mouseenter(function() {
    randomizedColor = 'rgb(' + randomColor() + ',' + randomColor() + ','
    + randomColor() + ')';
    $(this).css('background-color', randomizedColor);
    currentOpacity=$(this).css('opacity');
    $(this).css('opacity', currentOpacity-0.1);
    console.log(currentOpacity);
  });
}

$(document).ready(function() {
  generateGrid(16);
  // debug
  for(var i=0; i<20; i++){
    console.log(Math.random());
  }

});
