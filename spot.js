(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    
    function start() {
       
        promise.then(() => engine.toText('I'))
        .then(() => engine.shake())
        .then(() => engine.toText('LOVE'))
        .then(() => engine.shake())
        .then(() => engine.toText('YOU'))
        .then(() => engine.shake())
        .then(() => engine.clear());
    }
})();
