(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {return {status: 2, msg: 'Ready'};};
    ext.load = function(text, source) {
        if (source === "URL") {ScratchExtensions.loadExternalJS(text);}
        else
        {eval(text);}
    };
    ext.check = function(){return true;};
        var descriptor = {
        blocks: [
        [' ', 'load %s from %m.source', 'load', '', 'URL'],
        ['b', 'eel installed?', 'check']
        ],
        menus: {
        source: ['URL', 'text']
    },
    url: 'https://github.com/ac8774/Easy-Extension-Loader'
    };
    ScratchExtensions.register('Easy Extension Loader', descriptor, ext);
})({});
