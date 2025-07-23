import http from 'http'; // Aqui importamos o módulo http do node js

const server = http.createServer((req, res) => { // Aqui criamos um servidor local HTTP com os parâmetros req e res onde o req é a requisição do cliente e no final vai haver uma resposta "res.end()" onde finaliza a resposta HTTP
    if (req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'}); // Esse método define a resposta HTTP e o seu cabeçalho
        res.end('<h1>Olá seja bem-vindo a página inicial!</h1>'); // Aqui a resposta HTTP final será um html com a mensagem escrita 
    } else if (req.url === '/sobre') {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        res.end('<h1>Sobre nós</h1>');
    } else {
        res.writeHead(400, {'Content-type': 'text/html; charset=utf-8'});
        res.end('<h1>Página não encontrada</h1>')
    }
})

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000") // É  aqui onde o servidor inicia na porta 3000
})