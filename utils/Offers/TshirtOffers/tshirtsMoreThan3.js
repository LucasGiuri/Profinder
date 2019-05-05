import PropTypes from 'prop-types';

const tshirtsMoreThan3 = (tshirts, tshirtPrice, tshirtSpecialPrice) => {
	let price = tshirtPrice;

	if (tshirts >= 3) {
		price = tshirtSpecialPrice;
	}

	return tshirts * price;
}

tshirtsMoreThan3.propTypes = {
	tshirts: PropTypes.number.isRequired,
	tshirtPrice: PropTypes.number.isRequired,
	tshirtSpecialPrice: PropTypes.number.isRequired,
};

export default tshirtsMoreThan3;