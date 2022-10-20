import fs from 'fs';


const dir = './upload';
const file = 'lakers.txt';
const path = `${dir}/${file}`;
if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
        if (err) throw err;
        console.log(`Diretório: ${dir} criado com sucesso!`);
    });
} else {
    console.log(`Diretório: ${dir} já existe!`);
}
let msg = 'O segundo melhor time de basquete é o Los Angeles Lakers';
fs.writeFile(path, msg, (err) => {
    if (err) throw err;
    console.log(`Arquivo: ${file} criado com sucesso!`);
    
//   if (fs.existsSync('temp/new.txt')) {
//     fs.unlinkSync('temp/new.txt');
//   }
//   fs.rmdirSync('temp');
});