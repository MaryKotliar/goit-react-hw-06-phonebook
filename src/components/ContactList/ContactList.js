import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <ul>
        {contacts.map(item => (
          <Item key={item.id}>
            <Contact contact={item}></Contact>
          </Item>
        ))}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   items: PropTypes.arrayOf(object).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
