const INITIAL_STATE = {
    cardcount: 3
  };
  
  function flipReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
      case 'CARDCOUNT_SET':
        return { ...state, cardcount: action.cardcount };
      default: return state;
    }
  }
  
  export default flipReducer;