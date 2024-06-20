import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "../RegistrationPage/RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div>
      <div className={css.title}><PageTitle>Register your account</PageTitle></div>
      <RegistrationForm />
    </div>
  );
}