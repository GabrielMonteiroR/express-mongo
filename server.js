//iniciar o .env na parte mais externa da app
import "dotenv/config";
//importa o app
import app from "./source/app.js";



//define a porta que será utilizada
const PORT = 3000;

//metodo para ouvir as conexões com o servidor
app.listen(PORT, () => {
    console.log(`Servidor de porta ${PORT} funcionando.`)
})

