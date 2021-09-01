let nums = "0123456789", 
lets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
extras = "!$%^&*()_+|~-=`{}[]:;<>?,./";

function neu (config){
config || (config = {})

 return {
    largo: config.largo || 5,
    nums: typeof config.nums === 'boolean' ? config.nums : true,
    letras: typeof config.letras === 'boolean' ? config.letras : true,
    extras: typeof config.extras === 'boolean' ? config.extras : false,
    excluir: Array.isArray(config.excluir)       ? config.excluir : []
  };



};
function construct(config){
 var carac = '';
  if (config.nums) { carac += numbers; }
  if (config.letras) { carac += letters; }
  if (config.extras) { carac += specials; }
  for (var i = 0; i <= config.excluir.length; i++){
    carac = carac.replace(config.excluir[i], "");
  }
  return carac;

};

module.exports = function randomKey(config) {
opts = neu(config);
  var i, rn,
      rnd = '',
      len = config.largo,
      exclude = config.excluir,
      random = construct(config);
  for (i = 1; i <= len; i++) {
    rnd += random.substring(rn = Math.floor(Math.random() * random.length), rn + 1);
  }
  return rnd;



};