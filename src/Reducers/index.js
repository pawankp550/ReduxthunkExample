import { combineReducers  } from 'redux' 

const itemsReducer = (state = [] , action) => {

	switch(action.type){

		case 'FETCH_ITEMS' :
					return action.items;
		
		
		default:
					return state			
	}

}

export default combineReducers (
 {

		items : itemsReducer

});

