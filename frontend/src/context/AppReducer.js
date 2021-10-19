import React from 'react';
 
export default (state, action) => {
   switch(action.type) {
       case 'ADD_ITEM':
           return {
                   taskList: [action.payload, ...state.taskList]
           }
       case 'UPDATE_ITEM':
        return state.taskList.map(item=>{
            if(item === action.payload){
                return{...state,title: state.title,descript: state.descript}
            }
            return item
        })
           case 'REMOVE_ITEM':
            return {
                taskList: state.taskList.filter(item => item !== action.payload)
            }
            case 'REMOVE_ALL_ITEM':
           return {
               taskList: []
           }
       default:
           return state;
   }
}