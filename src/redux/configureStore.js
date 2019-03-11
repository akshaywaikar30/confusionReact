import {createStore,combineReducers} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';

export const configureStore=()=>{
	const store=createStore(
		combineReducers({
			dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
		})
		);
	return store;
}