import PageTitle from "../../components/PageTitle/PageTitle";
import css from "../HomePage/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.title}>
      <PageTitle>
        Welcome To Contact Book{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
    </div>
  );
}