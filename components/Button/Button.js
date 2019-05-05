import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({onClick, text, classes, isDisabled}) => {
  let buttonClasses = ['button'];

  if (classes) {
    buttonClasses = [...buttonClasses, classes];
  }

  return (
    <button onClick={onClick} className={buttonClasses.join(' ')} disabled={isDisabled}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  classes: PropTypes.array
};

Button.defaultProps = {
  onClick: () => '',
  classes: [''],
  isDisabled: false
};

export default Button;