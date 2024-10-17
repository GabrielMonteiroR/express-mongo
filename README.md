## NodeJS - Criando uma API Rest com Express e MongoDB

###  O que é API ( Application Programming Interface)?
No contexto de APIs, a palavra Aplicação refere-se a qualquer software com uma função distinta. A interface pode ser pensada como um contrato de serviço entre duas aplicações.

#### O que é REST?
O termo REST (_representational state transfer_ ou transferência de estado representacional) representa um padrão para desenvolvimento de APIs web utilizando o protocolo HTTP para transmissão de dados.

Além de usos diversos, as APIs também podem ser desenvolvidas seguindo outras arquiteturas além do REST. Seguem alguns exemplos:

- **APIs SOAP**: SOAP (_Simple Object Access Protocol_ ou protocolo simples de acesso a objetos) utiliza o formato de dados XML e pode usar HTTP ou outros protocolos na comunicação. É um formato mais antigo que o REST e muito utilizado por aplicações de grande porte, porém mais lento que o REST.
- **Event-Driven APIs**: APIs orientadas a eventos, ao contrário das APIs REST, não dependem de requisições feitas pelo lado cliente para iniciar a comunicação. Nesse caso, o cliente ou clientes “inscritos” na API se comunicam com ela através de gatilhos de eventos, como, por exemplo, um novo registro de usuário.
- **APIs GraphQL**: o GraphQL é uma linguagem de consulta (query) de APIs e também um runtime para executar estas consultas. É uma alternativa ao REST que pode se conectar a diversas APIs e bases de dados diferentes e retornar objetos complexos através de uma única requisição.
- **APIs gRPC**: _Remote Procedure Calls_ (ou chamadas procedurais remotas), desenvolvido pelo Google, é um framework baseado em HTTP2 para comunicação síncrona e assíncrona, que visa facilitar comunicação rápida e simplificada entre diversos serviços.


####  Criando o servidor

Criando o json
``` ps
npm init -y
```

configurar o type module

``` json
{

  "name": "express-mongo",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1"

  },

  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""

}
```

### Criando uma API express
antes devemos instalar o express

/source/app.js
``` node
//IMPORTA O EXPRESS
import express from 'express';
  
//INSTANCIA O EXPRESS
const app = express();

//Criando uma rota
app.get('/', (req,res) => {
    res.status(200).send("Curso de node JS");
});
```

server.js
``` node
//importa o app
import app from "./source/app.js";

//define a porta que será utilizada
const PORT = 3000;

//metodo para ouvir as conexões com o servidor

app.listen(PORT, () => {
    console.log(`Servidor de porta ${PORT} funcionando.`)
});
```

#### Req & Res
O protocolo de comunicação HTTP é baseado em **requisições e respostas** e na **comunicação cliente-servidor**.

> Todo processo de requisição-resposta usando HTTP é **sempre iniciado pelo lado cliente da requisição**. O lado servidor da requisição nunca envia “ativamente” nenhuma resposta para o lado cliente sem ser como resultado de uma requisição.

## Partes da requisição

As partes que podem compor uma requisição são:

- **URL**, também chamado de caminho ou rota, sempre iniciado com `http://` ou `https://`.
- **Header**, também chamado de cabeçalho, envia informações referentes ao cliente ou ao tipo de requisição. Alguns dados enviados através dos cabeçalhos são:
    - `host` é o domínio do servidor que receberá a requisição.
    - `User-agent` identifica o cliente, por exemplo, dados do navegador de onde está saindo a requisição.
    - `Content-Type` é o formato do dado que está sendo enviado no `body` da requisição, por exemplo JSON, string etc. Confira a [lista completa de tipos de dados e como devem ser declarados no header](https://www.iana.org/assignments/media-types/media-types.xhtml).
    - `Authorization` são as credenciais de autenticação para acesso a recursos protegidos.
    - `Accept` especifica o formato de retorno esperado na resposta, por exemplo, JSON.
- **Body** ou corpo da requisição, onde são trafegados dados enviados pelo cliente para serem recebidos pelo servidor, normalmente utilizado para dados mais estruturados e em requisições POST, PUT or PATCH. O tipo de dado enviado pelo _body_ deve ser o mesmo especificado no `Content-Type`, por exemplo, `application/json`.
- **Parâmetros** são inseridos na URL para envio de dados específicos, muito utilizados, por exemplo, para envio de informações variáveis como termos de buscas, IDs etc.
- **Método HTTP**, entre os aceitos pela rota, especifica o tipo de operação solicitado pelo cliente. Os mais comuns são os métodos GET, POST, PUT e DELETE. Vamos trabalhar com estes métodos com mais profundidade durante o curso.

Confira a [lista completa de informações dos cabeçalhos na documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers).

## Partes da resposta

A resposta a uma requisição HTTP é enviada pelo lado servidor da comunicação, de volta ao lado cliente. A resposta contém informações referentes à requisição, que podem ser uma confirmação de operação, dados solicitados ou mesmo mensagens de erro pertinentes em caso de falha em algum ponto da comunicação.

As partes que podem compor a resposta são:

- **Status da resposta**, que contém a versão HTTP utilizada, o código de status e a mensagem de status. Por exemplo, `HTTP/1.1 200 OK`.
- **Headers** ou cabeçalhos, com informações adicionais sobre a resposta ou o conteúdo da resposta. Por exemplo:
    - `Content-Type`;
    - `Content-Length`, que corresponde ao tamanho em bytes do corpo da resposta;
    - `Cache-Control`, que são as instruções de cache para a resposta;
    - `Set-Cookie`, que adiciona um valor de cookie ao navegador. Caso queira saber mais, confira [este artigo sobre o que são cookies e como são utilizados](https://www.alura.com.br/artigos/o-que-sao-cookies-como-funcionam).
- **Body**, o corpo da resposta, que contém os dados ou o conteúdo solicitado pelo cliente através da requisição e enviado pelo servidor. O formato de dados do body vai depender do formato especificado em `Content-Type`, por exemplo JSON.

## HTTP

É um protocolo de comunicação utilizado para transferir dados na web. Funciona na camada de *aplicação*.

Onde sempre possuimos duas entidades se comunicando:
*Cliente x servidor*

##### URLS
http://http://localhost:3000/

http -> protocolo
localhost -> servidor e porta
/ -> caminha/raiz

##### Portas
80 -> http
443 -> https
1023 - 65535 -> Livres para uso

#### Dominios
O domínio é o nome do site na Web. Ele facilita a navegação do usuário, que não precisa lembrar o IP de cada site.

#### DNS
O DNS tem como função realizar a tradução do nome de um domínio para o endereço de IP correspondente.

#### TelNet
conectando na localhost
```
telnet localhost 8000
```

get:
```
	GET /HTTP/1.1
```


#### Formato mensagens http
![[Formato das mensagens HTTP.png]]
#### Formas do servidor lembrar login
*Sessão  (token) & Cookies*

### HTTPS

1. Passo:  Para gerar o certificado digital, usamos o seguinte comando:

``` ps
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```
**Não esqueça que o comando deve ser executado na mesma pasta do seu backend.**

2. Passo : Já para habilitar o HTTPS, vamos modificar o arquivo server.js.

No topo do arquivo, adicionamos:

```javascript
const https = require("https")
```

Depois, modificamos a linha que inicia o servidor:

```javascript
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
}, server).listen(8000, () => {
   console.log("API disponível em https://localhost:8000")
})
```

Agora, quando você executar o backend, ele estará com o HTTPS ativado.

####  Certificado e chave privada
![[Pasted image 20241014095106.png]]

 O HTTPS usa uma **chave pública** e uma **chave privada**. As chaves estão ligadas matematicamente, o que foi cifrado pela chave pública só pode ser decifrado pela chave privada. Isso garante que os dados cifrados pelo navegador (chave pública) só podem ser lidos pelo servidor (chave privada). Como temos duas chaves diferentes envolvidas, esse método de criptografia é chamado de **criptografia assimétrica**. No entanto, a criptografia assimétrica tem um problema, ela é **lenta**.

![alt: Diagrama horizontal com duas partes, da esquerda para a direita: um quadro azul com um ícone de chave amarela com o nome “chave pública” que é indicada no navegador e, ao lado, outro quadro em azul com um ícone de chave branca com o nome “chave privada” que é indicada no servidor.](https://cdn3.gnarususercontent.com.br/3026-http-web-por-baixo-dos-panos/imagem4.png)

Por outro lado, temos a criptografia simétrica, que usa a mesma chave para cifrar e decifrar os dados, como na vida real, onde usamos a mesma chave para abrir e fechar a porta. A criptografia simétrica é muito mais rápida.

![alt: Diagrama horizontal com duas partes, da esquerda para a direita: um quadro azul com um ícone de chave verde com o nome “chave” que é indicada no navegador e, ao lado, outro quadro em azul com um ícone de chave verde com o nome “chave” que é indicada no servidor.](https://cdn3.gnarususercontent.com.br/3026-http-web-por-baixo-dos-panos/imagem5.png)

Agora, o interessante é que o **HTTPS usa ambos os métodos de criptografia, assimétrica e simétrica**. Como assim? Muita calma, tudo o que aprendemos é verdade! Só faltou o grande final :)

No certificado, vem a chave pública para o cliente utilizar, certo? E o servidor continua na posse da chave privada, ok? Isso é seguro, mas lento e por isso o cliente gera uma chave simétrica ao vivo. Uma chave só para ele e o servidor com o qual está se comunicando naquele momento! Essa chave exclusiva (e simétrica) é então enviada para o servidor utilizando a criptografia assimétrica (chave privada e pública) e então é utilizada para o restante da comunicação.

Então, HTTPS **começa** com criptografia **assimétrica** para **depois** mudar para criptografia **simétrica**. Essa chave simétrica será gerada no início da comunicação e será reaproveitada nas requisições seguintes.

#### Formato de dados

![[Pasted image 20241014100537.png]]
### HTTPS no Frontend
Primeiro, precisamos do certificado digital e da chave privada (note que nós já geramos esses itens para o backend, mas para o frontend ainda não).

```csharp
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```

Depois, instalamos o pacote que dá suporte ao HTTP/2 no NodeJS:

```undefined
npm install spdy
```

Agora, geramos uma versão de produção da nossa aplicação React:

```undefined
npm run build
```

Esse comando vai disponibilizar o nosso frontend pronto para deploy em uma pasta chamada build.

Criamos então o arquivo `server_http2.js`, que vai servir o nosso frontend com o HTTP/2 usando a biblioteca spdy:

```javascript
const spdy = require("spdy")
const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.static("build"))

spdy.createServer(
  {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.crt")
  },
  app
).listen(3002, (err) => {
  if(err){
    throw new Error(err)
  }
  console.log("Listening on port 3002")
})
```

Por fim, executamos esse arquivo com o comando `node server_http2.js`.

## Embed x Reference
## Embedding

Ao contrário do SQL, o MongoDB segue o princípio de **“dados que são acessados juntos devem ser armazenados juntos”**.

Pensando assim, _embedding_ significa _incorporar_ dados que são relacionados e inseri-los em um documento. É usado para simplificar as consultas (_queries_) aos dados e melhorar a performance geral das ferramentas nas consultas.

Veja abaixo um exemplo de documento `autor` com um array de livros incorporado ao restante dos dados. Arrays de objetos são uma forma comum de _embedding_ de dados.

```json
{
 "_id": ObjectId("579a7256f245878acabac457c"),
 "nome": "JRR Tolkien",
 "livros": [
   {"titulo": "O Senhor dos Anéis", "paginas": 500},
   {"titulo": "O Hobbit", "paginas": 200},
   {"titulo": "O Silmarillion", "paginas": 400}
 ]
}
```

Porém, incorporar dados em um único documento pode criar documentos muito grandes, o que pode acabar prejudicando a performance da aplicação, pois um documento deve ser carregado em memória por inteiro. Além disso, pode também fazer com que novos dados sejam incorporados indefinidamente a um único objeto e aumentando o tamanho em bytes além do limite de 16 mb por documento de um [objeto BSON](https://cursos.alura.com.br/extra/alura-mais/json-bson-entendendo-os-documentos-do-mongodb-c84).

## Referencing

_Referencing_ significa fazer referência a documentos em outra coleção. Nesse caso, os dados são guardados em coleções separadas, mas ainda é importante que mantenham vínculo entre eles. A referência é feita através de um campo específico do documento, normalmente o campo `id` ou equivalente.

A agregação de dados via reference visa evitar duplicação de dados (um aspecto muito importante no SQL, também chamada de “normalização de dados”) e também gerenciar o tamanho dos documentos para evitar a criação de documentos muito grandes, que prejudicariam a performance do sistema.

Por outro lado, a junção de dados via referência faz com que uma consulta se transforme em duas ou várias. Por exemplo, uma consulta aos dados de um livro resultaria em consultas tanto na coleção `livros` quanto na coleção `autores`, o que consome mais recursos e pode impactar a performance de leitura.

```json
{
 "_id": ObjectId("9gPOwsIJaf5knkzpvYNlk9flz"),
 "nome": "JRR Tolkien",
 "livros": [
   ObjectId("ctstNHEEKCLwTN7gN7KgNprYb"),
   ObjectId("qdQwKNumukFzuSYh58WKLN3TV"),
   ObjectId("KNUeheO0UbtpFYwLuJpdwbD5P")
 ]
}
```

Abaixo segue um resumo dos prós e contras de cada um dos métodos.

```ruby
| 	|               	**Embedding**               	|
|:---:|:-------------------------------------------------:|
| PRO | Dados retornados em uma única consulta        	|
| PRO | atualização e exclusão de dados em única operação |
| CON | duplicação de dados                           	|
| CON | documentos maiores                            	|
| 	|              	**Referencing**              	|
| PRO | Não há duplicação de dados                    	|
| PRO | documentos menores                            	|
| CON | necessário "unir" dados de múltiplos documentos   |
```

## Quando utilizar um ou outro?

A resposta é **depende**, pois isso passa pela prática de modelagem de dados e também pelas características de cada tipo de dado e coleção. Neste curso não vamos avançar nesse tópico, pois modelagem é um assunto para seu próprio curso.

Tanto o MongoDB quanto os gerenciadores SQL (MySQL, PostgreSQL, entre outros) têm suas próprias formações nas quais você pode aprender com mais profundidade sobre o funcionamento de cada um deles.
