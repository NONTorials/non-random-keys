

var nums = '0123456789',
    letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    especial = '!$%^&*()_+|~-=`{}[]:;<>?,./';



function construct (config) {
  var chars = '';
  if (config.numeric) { chars += nums; }
  if (config.letters) { chars += letras; }
  if (config.special) { chars += especial; }
  for (var i = 0; i <= config.exclude.length; i++){
    chars = chars.replace(config.exclude[i], "");
  }
  return chars;
};

function base (config) {
  config || (config = {});
  return {
    largo: config.length || 5,
    numero: typeof config.numeric === 'boolean' ? config.numeric : true,
    letras: typeof config.letters === 'boolean' ? config.letters : true,
    extras: typeof config.special === 'boolean' ? config.special : false,
    excluir: Array.isArray(config.exclude)       ? config.exclude : []
  };
};




module.exports = function randomString(config) {
  config = base(config);
  var i, rn,
      rnd = '',
      len = config.length,
      exclude = config.exclude,
      randomChars = construct(config);
  for (i = 1; i <= len; i++) {
    rnd += randomChars.substring(rn = Math.floor(Math.random() * randomChars.length), rn + 1);
  }
  return rnd;
};

