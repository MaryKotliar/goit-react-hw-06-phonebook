import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  //   );
  // });

  // const [filter, setFilter] = useState('');
  const contacts = useSelector(getContacts);
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const addContact = contact => {
  //   const isInContacts = contacts.some(
  //     ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
  //   );

  //   if (isInContacts) {
  //     alert(`${contact.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts(prevContacts => [
  //     ...prevContacts,
  //     { id: nanoid(), ...contact },
  //   ]);
  // };
  // const deleteContact = id => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== id)
  //   );
  // };
  // const filterByName = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const filteredContacts = filterByName();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        'Your phonebook is empty. Add first contact!'
      )}

      {contacts.length > 0 && <ContactList />}

      <GlobalStyle />
    </Container>
  );
}
// () => {
//   return (
//     JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
//   );
// }
