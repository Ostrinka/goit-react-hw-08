import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { regist } from "../../validation";
import toast from "react-hot-toast";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const mailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={regist}
      onSubmit={(values, actions) => {
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        dispatch(register(newUser))
          .unwrap()
          .then(() => {
            toast.success("Success!", { position: "top-center" });
          })
          .catch(() => {
            toast.error("Error", { position: "top-center" });
          });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} className={css.label}>
          Name
        </label>
        <div className={css.wrap}>
          <Field
            type="text"
            name="name"
            id={nameId}
            className={css.field}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.error}
          />
        </div>
        <label htmlFor={mailId} className={css.label}>
          Email
        </label>
        <div className={css.wrap}>
          <Field
            type="email"
            name="email"
            id={mailId}
            className={css.field}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={css.error}
          />
        </div>
        <label htmlFor={passwordId} className={css.label}>
          Password
        </label>
        <div className={css.wrap}>
          <Field
            type="password"
            name="password"
            id={passwordId}
            className={css.field}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}