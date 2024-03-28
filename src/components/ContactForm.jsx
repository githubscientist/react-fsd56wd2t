import { ErrorMessage, Field, Form, Formik } from 'formik';
import './ContactForm.css';

const ContactForm = () => {

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}

      validate={
        (values) => {
          const errors = {};

          if (!values.name) {
            errors.name = 'Name is required';
          }

          if (!values.email) {
            errors.email = 'Email is required';
          }

          return errors;
        }
      }

      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label htmlFor='name'>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name='name' component='span' className='error' />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <Field 
            id="email"
            name="email"
            type="email"
          />
          <ErrorMessage name='email' component='span' className='error' />
        </div>

        <div>
          <label htmlFor='message'>Message</label>
          <Field as="textarea" name='message' />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default ContactForm