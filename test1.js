/*jslint node:true */

(function () {
    "use strict";

    var isBrowser = typeof window !== "undefined",
        TagRegistry = isBrowser ? window.TagRegistry : require("./tag-reg"),
        dataStore = new TagRegistry();
    
    dataStore.set(["K1", "K2"], "AAA");
    dataStore.set(["K1", "K3", "K2"], "BBB");
    
    console.assert(dataStore.get(["K1", "K2"]).localeCompare("AAA") === 0);
    console.assert(dataStore.get(["K2", "K1"]).localeCompare("AAA") === 0);

    console.assert(dataStore.get(["K1", "K2", "K3"]).localeCompare("BBB") === 0);
    console.assert(dataStore.get(["K1", "K3", "K2"]).localeCompare("BBB") === 0);
    console.assert(dataStore.get(["K2", "K1", "K3"]).localeCompare("BBB") === 0);
    console.assert(dataStore.get(["K2", "K3", "K1"]).localeCompare("BBB") === 0);
    console.assert(dataStore.get(["K3", "K1", "K2"]).localeCompare("BBB") === 0);
    console.assert(dataStore.get(["K3", "K2", "K1"]).localeCompare("BBB") === 0);
    
    console.assert(typeof dataStore.get(["K4", "K5"]) === "undefined");
    console.assert(typeof dataStore.get(["K1", "K5"]) === "undefined");
    
    dataStore.set(["K1", "K2"], "CCC");
    dataStore.set(["K1", "K3", "K2"], "DDD");
    
    console.assert(dataStore.get(["K1", "K2"]).localeCompare("CCC") === 0);
    console.assert(dataStore.get(["K2", "K1"]).localeCompare("CCC") === 0);

    console.assert(dataStore.get(["K1", "K2", "K3"]).localeCompare("DDD") === 0);
    console.assert(dataStore.get(["K1", "K3", "K2"]).localeCompare("DDD") === 0);
    console.assert(dataStore.get(["K2", "K1", "K3"]).localeCompare("DDD") === 0);
    console.assert(dataStore.get(["K2", "K3", "K1"]).localeCompare("DDD") === 0);
    console.assert(dataStore.get(["K3", "K1", "K2"]).localeCompare("DDD") === 0);
    console.assert(dataStore.get(["K3", "K2", "K1"]).localeCompare("DDD") === 0);
    
    console.log("All tests are passed successfully!");
}());
