const { curryExistePessoa } = require('../../lib/pessoa/pessoa');

const existePessoa = curryExistePessoa([
    { nome: 'joao da silva' },
    { nome: 'maria souza' },
    { nome: 'arnoldo schawzt' }
]);

describe('PessoaDAO', () => {

    test('pessoa nao existe', () => {
        expect(existePessoa('mario schulte')).toBeFalsy();
    });

    test('pessoas existem', () => {
        expect(existePessoa('joao da silva')).toBeTruthy();
        expect(existePessoa('maria souza')).toBeTruthy();
        expect(existePessoa('arnoldo schawzt')).toBeTruthy();
    });

});