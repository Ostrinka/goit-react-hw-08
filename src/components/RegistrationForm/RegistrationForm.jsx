import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "./RegistrationForm.module.css";

const registration = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const mailId = useId();
  const passwordId = useId();

  return (
    <div className={css.container}>
      <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={registration}
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
        <div className={css.wrapper}>
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
        <div className={css.wrapper}>
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
        <div className={css.wrapper}>
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
    </div>
  );
}