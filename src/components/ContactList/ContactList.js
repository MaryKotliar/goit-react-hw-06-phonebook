import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { object } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
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
