import PropTypes from 'prop-types';

const vouchers2for1 = (vouchers, voucherPrice) => {
	let total = vouchers * voucherPrice;

	if (vouchers > 1) {
		total = vouchers % 2 === 0 ? total / 2: total / 2 + voucherPrice / 2;
	}
	
	return total;
}

vouchers2for1.propTypes = {
	vouchers: PropTypes.number.isRequired,
	voucherPrice: PropTypes.number.isRequired
};

export default vouchers2for1;