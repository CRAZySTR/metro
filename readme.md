# Інструкція з встановлення плагіна "Метрополітен". #
![picture alt](https://media.discordapp.net/attachments/1074363252152209489/1074363252693278830/image.png?width=1194&height=671 "Плагін метрополітен")
_Простий плагін, метро для сервера, реалізовано звичайне меню, ціни за проїзд і точки, де потрібно бути. Згодом оптимізуємо код, коли вимальовується структура нашого двигуна :_
## 1. Перейти до папки packages/index.js і знайти код: ##
```javascript
require('./managers/attachWeapons');
require('./managers/dispatcher');
require('./casino/wheel');
```
__Нижче додати:__
```javascript
(async () => {
    await require('./features/metro')();
})();
```
## 2. Перейти до папки handlers/src/index.js та знайти код: ##
```javascript
import "./manager/prolog";
import "./manager/scaleform";
import './betternotifs';
```
__Нижче додати:__
```javascript
import './features/metro';
```
## 3. Розташувати файл metro.js суворо: ##
NAME | PATCH
------------- | -------------
serverside  | packages\modules\metro.js
clientside  | handlers\src\features\metro.js
