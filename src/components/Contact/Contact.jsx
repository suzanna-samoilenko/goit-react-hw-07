import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

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
      <button onClick={handleDelete} className={styles.deleteBtn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
