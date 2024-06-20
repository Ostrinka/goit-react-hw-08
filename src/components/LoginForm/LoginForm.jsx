import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const mailId = useId();
  const passwordId = useId();

  const login = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={login}
      onSubmit={(values, actions) => {
        const userData = {
          email: values.email,
          password: values.password,
        };
        dispatch(logIn(userData))
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
          Log In
        </button>
      </Form>
    </Formik>
  );
}
