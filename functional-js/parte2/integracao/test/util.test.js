const { somaAsync, primeiroNegativo, esperarPor } = require('../lib/utils');

describe('Utils', () => {
    test('somaAsync', (done) => {
        somaAsync([2, 2, 2])
            .then(res => {
                expect(res).toBe(6);
                done();
            });
    });

    test('primeiroNegativo', async () => {
        const res = await primeiroNegativo([1, 2, 3, -5, 40]);
        expect(res).toBe(-5);
    });

    test('esperarPor', async () => {
        jest.setTimeout(1050);
        await esperarPor(1000);
    });
});