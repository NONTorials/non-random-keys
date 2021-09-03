<div align="center">
  <h1>non-random-keys</h1>
   <p>
    <a href="https://www.npmjs.com/package/non-random-keys"><img src="https://img.shields.io/npm/v/non-random-keys?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/non-random-keys"><img src="https://img.shields.io/npm/dt/non-random-keys?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/non-random-keys"><img src="https://nodei.co/npm/non-random-keys.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

## ⬇ | Instalación
```sh 
npm install non-random-keys
```

## 🛠 | Inicio
```js
const randomKey = require('non-random-keys');
const config = {
  largo: 5,
numero: false,
letras: true,
extras: false,
excluir: []
}
const userId = randomKey(config);
```
 ## 💪 | Config/Uso
Este npm usa una config con 4 parametros customs para personalizar la key que retorna.

 - Numeros:

 ```js
 //config.numero debe ser true o false , por defecto es true
 const userId = randomKey({
 numero: true
 });

 ```
 - Letras:

 ```js
 //config.letras debe ser true o false, por defecto es true
 const userId = randomKey({
letras: true
 });

 ```
- Longitud

```js
//config.largo debe ser un numero, por defecto es 5
const userId = randomKey({
  largo: 5
});
```
- Caracteres Especiales

```js
//config.extras debe ser true o false, por defecto es false
const userId = randomKey({
  extras: false
  });
```

- Excluidos

```js
//config.excluir debe ser un array, por defecto el array esta vacio y cada caracter debe ser individual
const userId = randomKey({
exluir: ["p", "a", "s", "4", "!"]
});
```
- Dato

Puedes no rellenar la config y cada valor se pondrá en su valor por defecto o puedes rellenarlos todos y poner los que gustes

## 👤 | Soporte/Bugs/Errores
- Si necesitas ayuda o has visto un error en el codigo del npm puedes unirte al servidor de soporte y aclarar o solicitarnos ayuda

<a href="https://discord.gg/n78HhfJ4st"><img src="https://discord.com/api/guilds/842535483007172618/widget.png?style=banner1"></a>
