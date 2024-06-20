// import { IoPerson } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa6";
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/operations';
// import css from './Contact.module.css'

// export default function Contact({ contact: { name, number, id } }) {
//   const dispatch = useDispatch();

//   return (
//     <div className={css.user}>
//       <ul className={css.menu}>
//         <li><IoPerson /> {name}</li>
//         <li><FaPhone /> {number}</li>
//       </ul>
//       <button className={css.btn} onClick={() =>
//         dispatch(deleteContact(id))}>Delete</button>
//     </div>
//   )
// }



// import { IoPerson } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa6";
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/operations';
// import toast from 'react-hot-toast';
// import css from './Contact.module.css';

// export default function Contact({ contact: { name, number, id } }) {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(id))
//       .then(() => {
//         toast.success('Contact deleted successfully!');
//       })
//       .catch(() => {
//         toast.error('Failed to delete contact.');
//       });
//   };

//   return (
//     <div className={css.user}>
//       <ul className={css.menu}>
//         <li><IoPerson /> {name}</li>
//         <li><FaPhone /> {number}</li>
//       </ul>
//       <button className={css.btn} onClick={handleDelete}>Delete</button>
//     </div>
//   );
// }



import { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import css from './Contact.module.css';

export default function Contact({ contact: { name, number, id } }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success('Contact deleted successfully!');
      })
      .catch(() => {
        toast.error('Failed to delete contact.');
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateContact({ id, name: editedName, number: editedNumber }))
      .then(() => {
        toast.success('Contact updated successfully!');
        setIsEditing(false);
      })
      .catch(() => {
        toast.error('Failed to update contact.');
      });
  };

  const handleCancel = () => {
    setEditedName(name);
    setEditedNumber(number);
    setIsEditing(false);
  };

  return (
    <div className={css.container}>
      {isEditing ? (
        <>
          <div className={css.inputEdit}>
            <input
            className={css.field}
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            className={css.field}
            type="text"
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
          />
          </div>
          
          <div className={css.btnEdit}>
            <button className={css.btn} onClick={handleSave}>Save</button>
            <button className={css.btn} onClick={handleCancel}>Cancel</button>
          </div>
          
        </>
      ) : (
        <>
          <ul className={css.menu}>
            <li><IoPerson /> {name}</li>
            <li><FaPhone /> {number}</li>
            </ul>
            <div className={css.btnUser}>
              <button className={css.btn} onClick={handleEdit}>Edit</button>
              <button className={css.btn} onClick={handleDelete}>Delete</button>
            </div>
          
        </>
      )}
    </div>
  );
}
