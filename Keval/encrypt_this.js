var encryptThis = function(text) 
{ 
  var encrypt = [];
  var data = text.split(' ');
  for (var i = 0; i < data.length; i++) 
  {
    var word = data[i].split('');
    word.splice(0, 1, word[0].charCodeAt());
    word.splice(1, 1, data[i][word.length-1]);
    word.splice(word.length-1, 1, data[i][1]);
    encrypt.push(word.join(''));
  }
  return encrypt.join(' ');
}