// import { Formik , Field, Form } from 'formik';
// import { Contacts } from './Contacts/Contacts';
// import { nanoid } from 'nanoid';

// import { Form } from 'formik';

export const InputForm = ({ handleSubmit, name }) => {
    console.log('3', handleSubmit)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" placeholder="Name" />

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
