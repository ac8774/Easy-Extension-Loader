(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
        ext.url = function(url) {
            ScratchExtensions.loadExternalJS(url);
    };
        ext.url = function(text) {
            eval(text);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        [' ', 'load from URL: %s', 'url'],
        [' ', 'load from text: %s', 'text'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Easy Extension Loader', descriptor, ext);
})({});
