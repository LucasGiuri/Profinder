import React, { Fragment, useState, useEffect } from 'react';
import { applyRules } from '../utils/Rules/Rules';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import { connect } from 'react-redux';
import { getServices } from '../apis/services';
import Form from '../components/Form/Form';

const App = ({combos, services, addCombo, removeCombo, updateCombo}) => {
	
	const [total, setTotal] = useState(0);

	useEffect(() => {
		addCombo();
  }, []);
	
	useEffect(() => {
		setTotal(applyRules(services));
	});

	return (
		<Fragment>
			<h2>Cabify combos !</h2>
			<Form selectors={combos} total={total} onAddClick={addCombo} onRemoveClick={removeCombo} onSelectChange={updateCombo} />
		</Fragment>
	);
}

const mapStateToPros = (state) => {
	return {
		combos: selectors.getAllCombos(state),
		services: selectors.getServicesByCombo(state)
  }
};

const mapDispatchToProps = (dispatch) => {
	const services = getServices();

  return {
		addCombo: () => dispatch(operations.addCombo(services)),
		removeCombo: (comboId) => dispatch(operations.removeCombo(comboId)),
		updateCombo: (comboId, serviceSelected) => dispatch(operations.updateCombo(comboId, serviceSelected))
  }
};

export default connect(mapStateToPros, mapDispatchToProps)(App);