import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Form } from "./Form/Form";
import { ContactList } from "./Contacts/ContactsList";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";
import { addContact, changedFilter, deleteContact } from 'redux/contacts/contacts.reducer';
import { toggleModal } from 'redux/modal/modal.reducer';
import { Modal } from './Modal/Modal';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);
  const isOpenModal = useSelector(state => state.modal.isOpenModal);

  const formSubmitHandler = data => {
    const hasDuplicates = contacts.some(
      contact => contact.name === data.name
    );

    if (hasDuplicates) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(data));

  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const updateFilterValue = e => {
    dispatch(changedFilter(e.target.value));
  };

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );


    return (
      <div className="container">
        <div className="wrapper">
          <button className='openModal' type='button' onClick={() => dispatch(toggleModal())}>❌</button>
          <Section title="Phonebook">
            <Form onSubmit={formSubmitHandler} />
          </Section>
          <Section title="Contacts">
            <Filter onFilterChange={updateFilterValue} filter={filter} />
            <ContactList contacts={sortedContacts} filter={filter} handleDeleteContact={handleDeleteContact}/>
          </Section>
        </div>
        {isOpenModal && <Modal />}
      </div>
    );
};
