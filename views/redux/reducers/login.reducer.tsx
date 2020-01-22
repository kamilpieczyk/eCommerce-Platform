
type State = {
  username: String,
  role: String,
  passport: String
}

export default (state: State = {
  username: "",
  role: "",
  passport: ""
}, action: any) => {

  switch(action.type){
    
    case "login":
      return {
        ...state,
        username: action.payload.username,
        role: action.payload.role,
        token: action.payload.passport
      }
      break;
    case "logout":
      return{
        ...state,
        username: "",
        role: "",
        passport: ""
      }
      break;
    default: return state
  }
}