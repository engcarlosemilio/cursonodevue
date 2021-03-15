const express = require('express');
const bodyparser = require('body-parser');
const cors = require ('cors');

const api = express();
const porta = 3000;
const router = express.Router();

api.use(cors());
api.use(bodyparser.urlencoded({extended: true}))
api.use(bodyparser.json({limit: '20mb', extended: true}))

router.get("/", (req, resp) => {
    return resp.json({mensagem: "teste"});
});

api.use("/", router);
api.listen(porta);
console.log("Servidor iniciado com sucesso...");