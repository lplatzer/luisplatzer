import {Box, Button} from "@mui/material";
import {Formik, Form, Field} from "formik";
import {TextField} from "formik-mui";
import * as yup from "yup";

const ContactSchema = yup.object().shape({
    name: yup.string()
    .required(),
    email: yup.string()
    .email()
    .required(),
    message: yup.string()
    .required()
})

export default function Contact(){
    return(
        <>
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            validationSchema={ContactSchema}
            onSubmit={async(values, { setSubmitting }) =>  {
                setTimeout(() => {
                    setSubmitting(false);
                    //todo: add call to contact api (contactForm(values) for example)
                alert(JSON.stringify(values, null, 3));
            }, 500);
            }}
        >
            {({submitForm, isSubmitting}) => (
                <Form>
                    <Field 
                    component={TextField}
                    label="Your name"
                    id="name"
                    variant="outlined"

                    />
                    <Field component={TextField}
                    label="Your Email"
                    id="email"
                    variant="outlined"
                    />
                    <Field
                    component={TextField}
                    label="Your Message"
                    id="message"
                    variant="outlined"
                    multiline
                    minRows={4}
                    />
                    <Button 
                        variant="outlined"
                        color="primary"
                        onClick={submitForm}
                    >
                    Submit
                    </Button>
            </Form>
            )}
        </Formik>
        </>
    )
}