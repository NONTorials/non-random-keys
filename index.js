var nums = '0123456789',
    letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    especial = '!$%^&*()_+|~-=`{}[]:;<>?,./';

const RandomKeyError = require('./error');

function construct (config) {
  var chars = '';
  if (config.numero) { chars += nums; }
  if (config.letras) { chars += letras; }
  if (config.extras) { chars += especial; }
  for (var i = 0; i <= config.excluir.length; i++){
    chars = chars.replace(config.excluir[i], "");
  }
  return chars;
};

function base (config) {
  config || (config = {});
  return {
    largo: config.largo || 5,
    numero: typeof config.numero === 'boolean' ? config.numero : true,
    letras: typeof config.letras === 'boolean' ? config.letras : true,
    extras: typeof config.extras === 'boolean' ? config.extras : false,
    excluir: Array.isArray(config.excluir)       ? config.excluir : []
  };
};




module.exports = function randomKey(config) {
if(isNaN(config.largo) && config.largo){
throw new RandomKeyError('El numero de longitud para la key debe ser un numero y se proporcionó: "'+config.largo+'"')
}
if(!Array.isArray(config.excluir) && config.excluir){
 throw new RandomKeyError('config.excluir Debe ser un array y se proporcionó: "'+typeof config.excluir+'"') 
}


  config = base(config);

  var i, rn,
      rnd = '',
      len = config.largo,
      exclude = config.excluir,
      randomChars = construct(config);
  for (i = 1; i <= len; i++) {
    rnd += randomChars.substring(rn = Math.floor(Math.random() * randomChars.length), rn + 1);
  }
  return rnd;
};

