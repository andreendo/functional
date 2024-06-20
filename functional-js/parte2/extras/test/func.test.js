const { asyncSum, firstNegative, waitFor } = require('../lib/func');
describe('Func', () => {
    describe('asyncSum', () => {
        it('should sum async', (done) => {
            asyncSum([1, 2, 3, 4])
                .then((res) => {
                    expect(res).toBe(10);
                    done();
                });

        });
    });

    describe('firstNegative', () => {
        it('should find negative', async () => {
            const res = await firstNegative([1, 2, -10, -9, 5]);
            expect(res).toBe(-10);
        });
    });

    describe('waitFor', () => {
        it('should wait for 1 s', async () => {
            jest.setTimeout(1050);
            await waitFor(1000);
        });
    });    
});