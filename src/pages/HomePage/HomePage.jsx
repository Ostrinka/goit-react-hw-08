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
      <div className={css.text}> 
        <p>
          Contacts book is designed for efficient management and convenient access to user contact information.
        </p>

      </div>  
    </div>
  
      
  );
}