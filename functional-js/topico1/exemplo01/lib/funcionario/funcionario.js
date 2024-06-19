const { length } = require('ramda');

exports.curryContarFuncionarioCpfBloqueado = (funcionarios, isCPFBloqueado) =>
    categoria => length(
        funcionarios
            .filter(f => f.categoria === categoria && isCPFBloqueado(f.cpf))
    )