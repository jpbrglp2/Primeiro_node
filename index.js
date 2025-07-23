import fs from 'fs'; // Fs é um módulo nativo do node js que permite a manipulação de arquivos

fs.writeFileSync("Texto.txt", "Olá mundo Node!"); // Aqui é uma função que permite a criação e a escrita de um arquivo .txt

const conteudo = fs.readFileSync("Texto.txt", "utf8"); // Já aqui é uma função para ler esse arquivo com o suporte para utf8
console.log(conteudo); // Aqui só mostra o arquivo no padrão utf8