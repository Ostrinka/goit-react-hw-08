import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css'

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.user}>
      <ul className={css.menu}>
        <li><IoPerson /> {name}</li>
        <li><FaPhone /> {number}</li>
      </ul>
      <button className={css.btn} onClick={() =>
        dispatch(deleteContact(id))}>Delete</button>
    </div>
  )
}