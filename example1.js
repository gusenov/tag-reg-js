/*jslint node:true */

(function () {
    "use strict";

    var isBrowser = typeof window !== "undefined",
        TagRegistry = isBrowser ? window.TagRegistry : require("./tag-reg"),
        dataStore = new TagRegistry();
    
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
}());
