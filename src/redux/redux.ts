const State = {
	user: 'bdemann',
	selectedMode: 0,
};

export const RootReducer = (state=State, action) => {
	switch(action.type) {
		case 'changeSelectedMode': {
			return {
				...state,
				selectedMode: action.newMode
			};
		}
		case 'cellSelected': {
			return {
				...state,
				selectedCell: action.selectedCell,
				currentDay: action.currentDay,
				currentHour: action.currentHour
			}
		}
		default: {
			return state;
		}
	}
}
