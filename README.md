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
