var redux=require('redux');
var oldState={
  num:["man hinh","chuot"],
  editStatus:true
}
var reducer1=(state=oldState,action)=>{
  switch (action.type) {
    case "CHANGE_EDIT_STATUS":
     return {...state,editStatus:!state.editStatus}
    case "ADD_NEW":
     return {...state,num:[...state.num,action.newItem]}
      break;
    case "DELETE":
      return {...state,num:state.num.filter((value,key)=>key!==action.index)}
  
    default:
      break;
  } 
  return state;
}
var store1=redux.createStore(reducer1);
console.log(store1.getState());
store1.dispatch({type:"CHANGE_EDIT_STATUS"});
console.log(store1.getState());
store1.dispatch({type:"ADD_NEW",newItem:"Tainghe"} )
console.log(store1.getState());
export default store1;