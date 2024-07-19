const {fs,mkdir} = require('fs');

function archive(writeFile, content = ''){
    fs.writeFileSync(writeFile + '.js', content, {flag: 'wx'}, (err) =>{
        if (err) throw err
    });
    return 'Archivo Creado'
}

// function file(){
//    mkdir('')
// }

console.log(archive(2))