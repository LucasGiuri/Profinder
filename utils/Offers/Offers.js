import { VOUCHER, TSHIRT, MUG } from '../../apis/services';
import vouchers2for1 from './VoucherOffers/vouchers2for1';
import tshirtsMoreThan3 from './TshirtOffers/tshirtsMoreThan3';
import mugsBasicOffer from './MugOffers/mugsBasicOffer';

export const voucherOffers = (vouchers) => {
	if (!vouchers) {
		return 0;
	}

	const voucherPrice = VOUCHER.price;
	return vouchers2for1(vouchers, voucherPrice);
}

export const tshirtOffers = (tshirts) => {
	if (!tshirts) {
		return 0;
	}

	const tshirtSpecialPrice = 19;
	const tshirtPrice = TSHIRT.price;
	return tshirtsMoreThan3(tshirts, tshirtPrice, tshirtSpecialPrice);
}

export const mugOffers = (mugs) => {
	if (!mugs) {
		return 0;
	}

	const mugPrice = MUG.price;
	return mugsBasicOffer(mugs, mugPrice);
}
