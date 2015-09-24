module.exports = function(){
    var content = [
        '                      RRRRRRRRRRRRRRRRR                      ',
        '                   RRRRRRRRRRRRRRRRRRRRRRR                   ', 
        '                RRRRRRRRRRRRRRRRRRRRRRRRRRRRR                ',          
        '              RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR              ', 
        '            RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR            ', 
        '           RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR           ', 
        '           RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR           ', 
        '           RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR           ', 
        '           RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR           ', 
        '           RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR           ', 
        '           RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR           ', 
        '           RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR           ',
        '            RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR            ', 
        '             RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR             ', 
        '              RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR              ', 
        '                RRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                ', 
        '                   RRRRRRRRRRRRRRRRRRRRRRRR                   ',
        '                       RRRRRRRRRRRRRRRR                       ',
        '                                                              '
    ]
    //cornflowerblue
    //midnightblue
    var colorsAry = [
        [ [11,'white.bold'] ,[7,'cyan.bold']]
       ,[ [7,'blue.bold'] , [8,'white.bold'] , [9,'cyan.bold']]
       ,[ [14,'blue.bold'] , [5,'white.bold'] , [11,'cyan.bold']]
       ,[ [17,'blue.bold'] , [5,'white.bold'] , [12,'cyan.bold']]
       ,[ [20,'blue.bold'] , [4,'white.bold'] , [14,'cyan.bold']]
       ,[ [21,'blue.bold'] , [4,'white.bold'] , [15,'cyan.bold']]
       ,[ [20,'blue.bold'] , [5,'white.bold'] , [15,'cyan.bold']]
       ,[ [19,'blue.bold'] , [6,'white.bold'] , [15,'cyan.bold']]
       ,[ [17,'blue.bold'] , [7,'white.bold'] , [16,'cyan.bold']]
       ,[ [12,'blue.bold'] , [9,'white.bold'] , [19,'cyan.bold']]
       ,[ [10,'blue.bold'] , [7,'white.bold'] , [23,'cyan.bold']]
       ,[ [11,'blue.bold'] , [6,'white.bold'] , [23,'cyan.bold']]
       ,[ [13,'blue.bold'] , [7,'white.bold'] , [20,'cyan.bold']]
       ,[ [15,'blue.bold'] , [6,'white.bold'] , [17,'cyan.bold']]
       ,[ [16,'blue.bold'] , [6,'white.bold'] , [14,'cyan.bold']]
       ,[ [16,'blue.bold'] , [6,'white.bold'] , [8,'cyan.bold']]
       ,[ [14,'blue.bold'] , [5,'white.bold'] , [5,'cyan.bold']]
       ,[ [11,'blue.bold'] , [5,'white.bold']]
    ];
    colorsAry.forEach(function(lineColor, index){
        var startIndex = 0;
        var color;
        var lineColorContent = content[index].split('');
        while( color = lineColor.shift() ){

            while(content[index][startIndex] == ' '){
                startIndex++;
            }
            var beginIndex = startIndex;
            var colorTextAry = lineColorContent.slice(beginIndex, startIndex += color[0]);
            var colorProperty = color[1].split('.');
            var colorText = colorTextAry.join('');
            var property;
            while(property = colorProperty.shift()){
                colorText = colorText[property];
            }
            colorTextAry.shift();
            colorTextAry.forEach(function(val,index){
                colorTextAry[index] = '';
            });
            lineColorContent.splice.apply(lineColorContent, [beginIndex, color[0], colorText].concat(colorTextAry) );
        }
        content[index] =  lineColorContent.join('');
    });

    content[content.length] = '                           '+ fis.cli.info.version;
    content[content.length] = '';
    content.unshift('');
    content.unshift('');

    content = content.join('\n');

    console.log(content);
};
