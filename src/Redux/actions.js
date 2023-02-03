
export const setContact = filter => {
  return {
    type: "FILTER_CONTACTS",
    payload: filter,
  };
};

export const setContacts = contacts => {
  return {
    type: "CRUD_CONTACTS",
    payload: contacts,
  };
};

export const deleteContacts = contacts => {
  return {
    type: "DELETE_CONTACTS",
    payload: contacts,
  };
};