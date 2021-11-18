
import * as Actions from '../actions';

const initialState = {

	todoRequiredDialog: {
		props: {
			open: false
		},
		data: null,
	},
};

const protfolioReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.OPEN_DIALOG: {
			return {
				...state,
				todoRequiredDialog : {
					props:{
						open:true
					},
					data:action.payload
				}
			};
		}
        case Actions.CLOSE_DIALOG: {
			return {
				...state,
				todoRequiredDialog : {
					props:{
						open:false
					},
					data:null
				}
			};
		}
        default: {
			return state;
		}
    }
};

export default protfolioReducer;