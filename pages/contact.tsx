import {Box, Button, Container, LinearProgress, Typography} from "@mui/material";
import {Formik, Form, Field} from "formik";
import {TextField as FormikTextField} from "formik-mui";
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
        <Container component='main' maxWidth='md'>
            <Typography variant="h5" component="h1">
                Want to get in touch?
            </Typography>
            <Typography variant="body1">
                If you want to shoot me a message or just want to chat, use this form.
            </Typography>
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
            >
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        text: ''
                    }}
                    validationSchema={ContactSchema}
                    //TODO: add submit function call instead of logging values
                    onSubmit={async (values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            console.log("contact info sent:  " + JSON.stringify(values));
                        }, 500);
                    }}
                >
                    {({ submitForm, isSubmitting })=> (
                        <Box component={Form} noValidate sx={{ '& .MuiTextField-root': { m: 1}, }}>
                            <Field
                                component={FormikTextField}
                                name="name"
                                type="text"
                                id="name"
                                label="Your Name"
                                autoComplete="given-name"
                                fullWidth
                                autoFocus
                            />
                            <Field
                                component={FormikTextField}
                                name="email"
                                type="email"
                                id="email"
                                label="Your Email"
                                autoComplete="email"
                                fullWidth
                            />
                            <Field
                                component={FormikTextField}
                                name="message"
                                type="text"
                                id="message"
                                label="Your Message"
                                fullWidth
                                multiline
                                minRows={4}
                            />
                            {isSubmitting && <LinearProgress/>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                sx={{ mt: 2, mb: 2 }}
                            >
                                Send message
                            </Button>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Container>
    )
}