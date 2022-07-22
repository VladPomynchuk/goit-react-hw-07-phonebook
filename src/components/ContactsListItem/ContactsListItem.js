import { useDeleteContactMutation } from 'redux/contactsApi';
import { TailSpin } from 'react-loader-spinner';
import { Item, RemoveBtn } from './ContactsListItem.styled';

const ContactsListItem = ({ data }) => {
  const { name, number, id } = data;

  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <Item>
      {`${name}: ${number}`}
      <RemoveBtn
        onClick={() => {
          deleteContact(id);
        }}
      >
        {isLoading && <TailSpin color="#16aee0" height="12" width="12" />}
        Delete
      </RemoveBtn>
    </Item>
  );
};

export default ContactsListItem;
