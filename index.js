var rong = module.exports = require('fis');

fis.cli.name = 'rong';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.config.set('modules.parser.css', 'less');
fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');
fis.config.set('settings.postprocessor.jswrapper.type', 'amd');
var time = fis.util.md5(Date.now() + '', 9);
var helper = function(obj){
    fis.util.map(obj, function(id, res){
        if(res.type == 'js' || res.type == 'css' || res.type == 'png')
        res.uri = res.uri + '?t=' + time;
    });
};
fis.config.set('modules.postpackager', function(ret){
    helper(ret.map.res);
    helper(ret.map.pkg);
});