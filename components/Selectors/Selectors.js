import React, { Fragment } from 'react';
import Button from '../Button/Button';
import './Selectors.scss';
import PropTypes from 'prop-types';

const Selectors = ({selectors, onChange, onClick}) => {
  return (
    <Fragment>
      {selectors.map(selector => (
        <div className="selectors__selector" key={selector.id}>
          <select className="selectors__selector--select" onChange={() => onChange(selector.id, event.target.value)}>
            <option value=''>Choose a service...</option>
            {selector.services.map(service => (
              <option key={`s-${selector.id}-o-${service.id}`} value={service.value}>
                {service.value}
              </option>
            ))}
          </select>
          <Button text="Remove" classes={['button-danger']} onClick={() => onClick(selector.id)} isDisabled={selectors.length === 1} />
        </div>
      ))}
    </Fragment>
  )
}

Selectors.propTypes = {
  selectors: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

Selectors.defaultProps = {
  onChange: () => '',
  onClick: () => ''
};

export default Selectors;