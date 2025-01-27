import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      <div className={styles.contactInfo}>
        <span className={styles.name}>
          <FaUser className={styles.icon} /> {name}
        </span>
        <span className={styles.number}>
          <FaPhoneAlt className={styles.icon} /> {number}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={styles.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
