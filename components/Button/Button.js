import './Button.scss';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonCmp = ({onClick, text, classes, isDanger, isDisabled}) => {
  let buttonClasses = [''];
  let color = 'inherit';

  if (isDanger) {
    color = 'secondary';
  }

  if (classes) {
    buttonClasses = [...buttonClasses, classes];
  }

  return (
    <Button variant="outlined" color={color} className={buttonClasses.join(' ')} disabled={isDisabled} onClick={onClick}>
      {text}
    </Button>
  )
}

ButtonCmp.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDanger: PropTypes.bool,
  isDisabled: PropTypes.bool,
  classes: PropTypes.array
};

ButtonCmp.defaultProps = {
  onClick: () => '',
  classes: [''],
  isDanger: false,
  isDisabled: false
};

export default ButtonCmp;