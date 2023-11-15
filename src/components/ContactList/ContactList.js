import { ContactItem } from "./ContactItem"

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (<li key={id}>
                <ContactItem is={id} name={name} number={number} onDelete={() => onDeleteContact(id)} /> </li>))}
        </ul>
    )
}