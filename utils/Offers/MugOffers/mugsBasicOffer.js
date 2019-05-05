import PropTypes from 'prop-types';

const mugsBasicOffer = (mugs, mugPrice) => mugs * mugPrice;

mugsBasicOffer.propTypes = {
	mugs: PropTypes.number.isRequired,
	mugPrice: PropTypes.number.isRequired,
};

export default mugsBasicOffer;