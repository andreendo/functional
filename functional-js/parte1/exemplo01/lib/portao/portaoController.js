const Display = require('./display');
const Cancela = require('./cancela');
const AutomovelDAO = require('./automovelDAO');
const RegistroDAO = require('./registroDAO');

class PortaoController {
    constructor() {
        this.display = new Display();
        this.cancela = new Cancela();
        this.automovelDAO = new AutomovelDAO();
        this.registroDAO = new RegistroDAO();
    }

    abrir(tag) {
        if (tag === 'ERRO')
            return this.tratarSemTag();

        const auto = this.automovelDAO.getByTagName(tag);
        if (auto === null)
            return this.tratarTagDesconhecida();

        return this.tratarTagConhecida(auto);
    }

    tratarSemTag() {
        this.mostrarMensagem('Automovel nao possui TAG. Por favor voltar!');
        return false;
    }

    tratarTagDesconhecida() {
        this.mostrarMensagem('TAG desconhecida. Por favor, voltar!');
        return false;
    }

    tratarTagConhecida(auto) {
        this.mostrarMensagem(`Bem-Vindo, ${auto.proprietario}!`);
        this.cancela.levantar();
        this.registroDAO.registrarEntrada(auto.placa, auto.proprietario);
        return true;
    }

    mostrarMensagem(msg) {
        this.display.limpar();
        this.display.mostrarMsg(msg);
    }
}

module.exports = PortaoController;