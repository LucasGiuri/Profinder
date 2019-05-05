import vouchers2for1 from './vouchers2for1';

describe('vouchers2for1', () => {
  it('vouchers2for1 with 2 params required and 1 voucher', () => {
    const vouchers = 1;
    const voucherPrice = 5;
    expect(vouchers2for1(vouchers, voucherPrice)).toBe(5);
  })

  it('vouchers2for1 with 2 params required and 2 vouchers', () => {
    const vouchers = 2;
    const voucherPrice = 5;
    expect(vouchers2for1(vouchers, voucherPrice)).toBe(5);
  })

  it('vouchers2for1 with 2 params required and 3 vouchers', () => {
    const vouchers = 3;
    const voucherPrice = 5;
    expect(vouchers2for1(vouchers, voucherPrice)).toBe(10);
  })

  it('vouchers2for1 with 2 params required and 5 vouchers', () => {
    const vouchers = 5;
    const voucherPrice = 5;
    expect(vouchers2for1(vouchers, voucherPrice)).toBe(15);
  })
})
