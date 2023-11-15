import { Component } from "react";
import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').required('Required'),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Please use the format 111-22-33').required('Required'),
});

export class ContactForm extends Component {

    nameId = nanoid();
    telephoneId = nanoid();

    render() {
        return (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
    }}
    validationSchema={FormSchema}
      onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
      }}
    >
      <Form>
        <label>Name</label>
        <Field id={this.nameId} name="name" placeholder="Jane" />
        <ErrorMessage name="name" />

        <label>Number</label>
        <Field id={this.telephoneId} name="number" placeholder="111-22-33" />
        <ErrorMessage name="number" />        
        
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  </div>
        )
    }
}