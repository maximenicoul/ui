import React, { PropTypes } from 'react';
import { api } from 'react-cmf';
import { Actions as PureActions } from 'react-talend-components';

/**
 * @param {Object} props react props
 * @example
<Actions name="Hello world"></Actions>
 */
function Actions({ names, ...rest }, context) {
	const onClick = (event, payload) => {
		context.store.dispatch(payload.action);
	};
	const actions = names ? names.map(
		name => api.action.getActionInfo(context, name)
	) : null;

	return (
		<PureActions
			actions={actions}
			{...rest}
			onClick={onClick}
		/>
	);
}

Actions.propTypes = {
	names: PropTypes.arrayOf(PropTypes.string),
};

Actions.contextTypes = {
	store: React.PropTypes.object,
};

export default Actions;
