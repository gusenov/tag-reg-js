# [Пример использования](example1.js)

```js
var dataStore = new TagRegistry();
    
dataStore.set(["K1", "K2"], "AAA");
console.log(dataStore.get(["K1", "K2"])); // AAA
console.log(dataStore.get(["K2", "K1"])); // AAA

dataStore.set(["K1", "K3", "K2"], "BBB");
console.log(dataStore.get(["K1", "K2", "K3"])); // BBB
console.log(dataStore.get(["K1", "K3", "K2"])); // BBB
console.log(dataStore.get(["K2", "K1", "K3"])); // BBB
console.log(dataStore.get(["K2", "K3", "K1"])); // BBB
console.log(dataStore.get(["K3", "K1", "K2"])); // BBB
console.log(dataStore.get(["K3", "K2", "K1"])); // BBB
```

Вывод:

```text
$ node example1.js 
AAA
AAA
BBB
BBB
BBB
BBB
BBB
BBB
```

# Публикация npm-пакета

Фиксация изменений:

```bash
$ git add .
$ git commit -S -m "0.0.1"
$ git tag -s v0.0.1 -m 'signed 0.0.1 tag'
```

Отправка на [github.com](https://github.com/gusenov/tag-reg-js):

```bash
$ git push --tags origin master:master
```

Отправка на [npmjs.com](https://www.npmjs.com/package/tag-reg):

```bash
$ npm login
$ npm publish
```
