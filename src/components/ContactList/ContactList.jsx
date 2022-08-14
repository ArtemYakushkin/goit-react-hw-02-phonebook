import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem/ContactListItem";

const ContactList = ({ contacts, del}) => {
    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <ContactListItem key={id}
                        contact={[id, name, number]}
                        deleteContact={() => del(id)}
                    />
                ))}
            </ul>
        </div>
    );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  del: PropTypes.func.isRequired,
};

export default ContactList;