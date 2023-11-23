import { createSlice } from "@reduxjs/toolkit";

const contactsData = [
  {id: 'id-1', name: 'Maria Barvinok', phone: '+38 097 323 88 70', avatar: 'https://ca.slack-edge.com/T05UVJFGHKR-U05VA3663C3-c19d842afff7-512'},
  {id: 'id-2', name: 'Dima Mentor', phone: '+38 096 888 88 80', avatar: 'https://ca.slack-edge.com/T05UVJFGHKR-U06070Z0R1B-cb7e1290fd75-512'},
  {id: 'id-3', name: 'Nataliia Valko', phone: '+38 097 777 88 80', avatar: 'https://ca.slack-edge.com/T05UVJFGHKR-U0609UHLG4S-847bdf508cac-512'},
  {id: 'id-4', name: 'Sasha Repeta', phone: '+38 097 323 88 80', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQUbo4Id6f68u2DnixTMAbe3-iI1KB3b8rz03EMkcxyHxWs_XnnCebwXEx9ORbrICNhk&usqp=CAU'},
  {id: 'id-5', name: 'Viacheslav Borysov', phone: '+38 096 999 99 90', avatar: 'https://ca.slack-edge.com/T05UVJFGHKR-U06071TEJBX-c06a44ef6d43-512'},
]

const initialState  = {
  contacts: JSON.parse(localStorage.getItem("contacts")) ?? contactsData,
  filter: "",
}

const contactsSlice = createSlice({

  name: "contacts",

  initialState,

  reducers: {
    addContact(state, {payload}) {
      state.contacts.push(payload);
    },
    deleteContact(state, {payload}) {
      state.contacts = state.contacts.filter((contact) => contact.id !== payload);
    },
    changedFilter(state, {payload}) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, changedFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
