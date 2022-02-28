const INIT_STATE = {
    Data: [],
  }
  
  const dataReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
  case SET_Data:
        return {
          ...state,
          Data: action.payload,
        } 
    }
}