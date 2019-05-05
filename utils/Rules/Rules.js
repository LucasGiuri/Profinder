import { VOUCHER, TSHIRT, MUG } from '../../apis/services';
import { voucherOffers, tshirtOffers, mugOffers } from '../Offers/Offers';

const filterById = (services, id) => {
	if (!services) {
		return 0;
	}

	return services.filter(service => service === id).length;
};

export const applyRules = (services) => {
	const totalVoucherServices = voucherOffers(filterById(services, VOUCHER.value));
	const totalTshirtServices = tshirtOffers(filterById(services, TSHIRT.value));
	const totalMugServices = mugOffers(filterById(services, MUG.value));
	return totalVoucherServices + totalTshirtServices + totalMugServices;
}