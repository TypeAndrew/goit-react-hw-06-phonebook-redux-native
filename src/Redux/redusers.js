import { combineReducers } from "redux";

const contactsInitialState = 
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
 ]
  


const filterInitialState = "";
                                                    // destruction action
export const filterReduser = (state = filterInitialState, {type, payload}) => {
   
    switch (type) {
      case "FILTER_CONTACTS":{
        return  payload;
      }
      default:
        return state
      }
};



export const contactsReduser = (state = contactsInitialState, {type, payload}) => {
   
    switch (type) {
      case "CRUD_CONTACTS":{
        return [ ...payload];
      }
      case "DELETE_CONTACTS":{
        return [...state.filter(el => el.name !== payload)];
      }        
              
      default:
        return state
      }
};


//// instead down comment code , library can make rduser on short code////
export const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

/*export const rootReducer = (state = {}, action) => {
  // Повертаємо об'єкт стану
  return {
    // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
    contacts: filterReduser(state.filter, action),
    filter: contactsReduser(state.contacts, action),
  };
};*/