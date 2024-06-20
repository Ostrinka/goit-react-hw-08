import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const initialValues = {
    name: "",
    number: ""
  };
  const userSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!")
      .max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!")
      .max(50, "Too Long!").required("Required")
  });
    const fieldId = useId();
    const dispatch = useDispatch();
    
    const handleSubmit = (values, actions) => {
      dispatch(addContact({ ...values }))
      .then(() => {
        toast.success('Contact added successfully!');
      })
      .catch(() => {
        toast.error('Failed to add contact.');
      });
      actions.resetForm();
    };
  
  return (
    <div className={css.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label  htmlFor={`${fieldId}-name`}>Name</label>
            <Field className={css.field} type="text" name="name" id={`${fieldId}-name`}/>
            <ErrorMessage name="name" component="span" className={css.error}/>
          </div>
          <div className={css.wrapper}> 
            <label  htmlFor={`${fieldId}-number`}>Number</label>
            <Field className={css.field} type="text" name="number" id={`${fieldId}-number`}/>
            <ErrorMessage name="number" component="span" className={css.error}/>
          </div>
          <button className={css.btn} type="submit">Add contact</button>
        </Form>
      </Formik></div>
    )  
}

