(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {return {status: 2, msg: 'Ready'};};
    ext.url = function(url) {ScratchExtensions.loadExternalJS(url);};
    ext.text = function(text) {eval(text);};
    var descriptor = {
        blocks: [
        [' ', 'load from URL: %s', 'url'],
        [' ', 'load from text: %s', 'text'],
        ]
    };
    ScratchExtensions.register('Easy Extension Loader', descriptor, ext);
})({});
