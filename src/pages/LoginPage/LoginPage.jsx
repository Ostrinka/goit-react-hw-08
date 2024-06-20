import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "../LoginPage/LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <div className={css.title}><PageTitle>Please log in</PageTitle></div>
      <LoginForm />
    </div>
  );
}