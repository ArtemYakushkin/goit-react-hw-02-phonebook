// import PropTypes from "prop-types";

const ContactListItem = ({ deleteContact, contact: [id, name, number] }) => {
    return (
        <li key={id}>
            {name}: {number}
            <button type="button" onClick={deleteContact}>Delete</button>
        </li>
    );
}

export default ContactListItem;

