import { PROMOTIONS } from '../shared/promotions';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';

export const initialState={
	  dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
};

export const Reducer=(state =initialState,action) => {
	return state;
};