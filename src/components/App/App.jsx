import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import ContactForm from '../ContactForm/ContactForm';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import css from './App.module.css';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}


