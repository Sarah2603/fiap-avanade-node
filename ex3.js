import fs from "fs";
console.log(process.argv);

if (process.argv[2]) {
    const cmd = process.argv[2];
    let folders = [];
    let files = [];
    
    switch (cmd) {
        case 'html':
            folders = ["assets", "assets/css", "assets/js", "assets/images", "assets/fonts",];
            files = ["index.html", "assets/css/style.css", "assets/js/script.js"];
            break;

        case 'react':
            folders = ["src", "src/components", "src/pages", "src/assets", "src/assets/css", "src/assets/js", "src/assets/images", "src/assets/fonts",];
        files = ["src/index.js", "src/App.js", "src/components/App.js", "src/pages/Home.js", "src/assets/css/style.css", "src/assets/js/script.js"];
            break;
         default:
            console.log('Comando não reconhecido!');
    }
    folders.forEach((folder) => {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
            console.log(`Diretório: ${folder} criado com sucesso!`);
        } else {
            console.log(`Diretório: ${folder} já existe!`);
        }
    });    
            

        }

/*const dir = "./upload";

if (!fs.existsSync(dir)) {
  console.log("Criando diretório");
  fs.mkdir(dir, (err) => {
    console.log("Diretório criado com sucesso");
  });
} else {
  console.log("Acessando o diretório ", dir);
}
*/

/*

let msg = "O segundo melhor time de basquete do mundo é o Lakers";
let file = "lakers.txt";
let path = `${dir}/${file}`;

if (!fs.existsSync(path)) {
  fs.writeFile(path, msg, () => {
    console.log("Arquivo criado com sucesso ", file);
  });
}
*/
