import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import Selectors from '../Selectors/Selectors';
import Button from '../Button/Button';

const Form = ({selectors, total, onAddClick, onRemoveClick, onSelectChange}) => {
  return (
    <Fragment>
      <Selectors selectors={selectors} onChange={onSelectChange} onClick={onRemoveClick} />
      <div className="form--add-button">
        <Button text="Add" onClick={onAddClick} />
      </div>
      <h4>Total: {total}</h4>
    </Fragment>
  )
}

Form.propTypes = {
  selectors: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
  onAddClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onSelectChange: PropTypes.func
};

Form.defaultProps = {
  onAddClick: () => '',
  onRemoveClick: () => '',
  onSelectChange: () => ''
};

export default Form;