export default (state, action) => {
  switch (action.type) {
    case 'GET_ITEM':
      if (JSON.stringify(state.taskList) != JSON.stringify(action.payload)) {
        return { taskList: action.payload };
      } else {
        return state;
      }
    case 'ADD_ITEM':
      var isCompleted = true;
      if (!action.payload.title | !action.payload.id | !action.payload.descript) {
        isCompleted = false;
      }
      state.taskList.push({ ...action.payload, isCompleted: isCompleted });
      return { taskList: state.taskList };
    case 'UPDATE_ITEM':
      return state.taskList.map((item) => {
        if (item === action.payload) {
          return { ...state, title: state.title, descript: state.descript };
        }
        return item;
      });
    case 'REMOVE_ITEM':
      return {
        taskList: state.taskList.filter((item) => item !== action.payload),
      };
    case 'REMOVE_ALL_ITEM':
      return {
        taskList: [],
      };
    default:
      return state;
  }
};
