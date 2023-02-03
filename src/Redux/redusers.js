const initialState = {
  contacts: [ 
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
  filter: ""

}
                                                    // sestruction action
export const rootReduser = (state = initialState, {type, payload}) => {
   
    switch (type) {
    case "FILTER_CONTACTS":{
      return { ...state, ...payload};
    }
    case "CRUD_CONTACTS":{
      return { ...state, contacts: payload};
    }
    case "DELETE_CONTACTS":{
      return { ...state, contacts: state.contacts.filter(el => el.name !== payload)};
    }        
            
    default:
      return state
    }
};