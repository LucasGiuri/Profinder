import { applyRules } from './Rules';

jest.mock('../Offers/Offers', () => ({
    voucherOffers: () => 1,
    tshirtOffers: () => 1,
    mugOffers: () => 1
}));

jest.mock('../../apis/services', () => ({
    VOUCHER: {value: 'VOUCHER'},
    TSHIRT: {value: 'TSHIRT'},
    MUG: {value: 'MUG'},
}))

describe('Rules', () => {
    const services = [
        {id: 'VOUCHER'},
        {id: 'TSHIRT'},
        {id: 'MUG'}
    ];

    it('applyRules integration', () => {
        expect(applyRules(services)).toBe(3);
    })
})