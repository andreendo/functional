const { curryContarFuncionarioCpfBloqueado } = require('../../lib/funcionario/funcionario');
const funcionarios = require('./fakeFuncionarios');

describe('Funcionario', () => {

    test('2 tecnicos sem CPF bloqueado', () => {
        const isCPFBloqueadoMock = jest.fn();
        isCPFBloqueadoMock.mockReturnValue(false);
        const contarFuncsCpfBloqueado = curryContarFuncionarioCpfBloqueado(funcionarios, isCPFBloqueadoMock);
        expect(contarFuncsCpfBloqueado('tecnico')).toBe(0);
    });

    test('1 analista com CPF bloqueado', () => {
        const isCPFBloqueadoMock = jest.fn();
        isCPFBloqueadoMock.mockReturnValue(true);
        const contarFuncsCpfBloqueado = curryContarFuncionarioCpfBloqueado(funcionarios, isCPFBloqueadoMock);
        expect(contarFuncsCpfBloqueado('analista')).toBe(1);
    });

    test('4 gerentes e 2 com CPF bloqueado', () => {
        const isCPFBloqueadoMock = jest.fn();
        isCPFBloqueadoMock
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(true);
        const contarFuncsCpfBloqueado = curryContarFuncionarioCpfBloqueado(funcionarios, isCPFBloqueadoMock);
        expect(contarFuncsCpfBloqueado('gerente')).toBe(2);
    });
});