export const actionType = {
  SET_USER: "SET_USER",
  SET_FRAME: "SET_FRAME",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

      case actionType.SET_FRAME:
      return {
        ...state,
        frameData: action.frameData,
      };
    default:
      return state;
  }
};

export default reducer;
