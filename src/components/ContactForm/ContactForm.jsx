import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    number: Yup.string()
      .matches(
        /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
        "Invalid phone number format"
      )
      .required("Required"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
      initialValues={{
        name: "",
        number: "",
      }}
    >
      <Form className={styles.form}>
        <label className={styles.labelForm}>
          <span>Name</span>
          <Field type="text" name="name" className={styles.inputForm} />

          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.labelForm}>
          <span>Number</span>
          <Field type="tel" name="number" className={styles.inputForm} />

          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </label>
        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
