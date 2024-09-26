import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { schema } from 'schema/schema';
import toast from 'react-hot-toast';
import Line from 'components/Line/Line';
import TransparentButton from 'components/ui/TransparentButton/TransparentButton';

const FormContainer = styled.form`
  background-color: var(--accent-background);
  margin-top: 24px;
  padding: 36px 12px;
  @media (min-width:768px) {
    margin: 0;
  }
    @media (min-width:1280px) {
        padding: 48px;
    }
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  border: none;
  margin: 8px 0;
  background-color: var(--accent-background);
  height: 22px;
  font-size: 18px;
  font-style: normal;
  font-family: "Fira Sans";
  font-weight: 400;
  &::placeholder {
 color: var(-placeholder-color);
  }
    &:not(:placeholder-shown), &:focus  {
  
     background-color: transparent; 
  }
  @media (min-width: 1280px){
    font-size:20px;
    margin-top: 12px;
  }
`;

const InputField = styled.div`
  display: block;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

const TextArea = styled.textarea`
  outline: none;
  width: 100%;
  border: none;
  margin: 8px 0 16px 0;
  background-color: var(--accent-background);
  height: 147px;
  font-size: 18px;
  font-style: normal;
  font-family: "Fira Sans";
  font-weight: 400;
  &::placeholder {
 color: var(-placeholder-color);
  }
    @media (min-width: 1280px){
    font-size:20px;
    margin: 12px 0 32px 0;
  }
`;

const ErrorMessage = styled.div`
  height: 14px;
  color: var(--error-color);
  font-size: 12px;
  margin: 8px 0 6px auto;
  text-align: right;
`;

const ErrorBox = styled.div`
  height: 14px;
  margin: 8px 0 6px auto;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            try {
                toast.success('Form submitted successfully!');
                resetForm();
            } catch (error) {
                toast.error('Error submitting form: ' + error.message);
            }
        }
    });

    return (
        <FormContainer onSubmit={formik.handleSubmit}>
            <InputField>
                <Label htmlFor="fullName">*Full name:</Label>
                <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    placeholder='John Rosie'
                />
                <Line color={formik.touched.fullName && formik.errors.fullName ? 'var(--error-color)' : null} />
                {formik.touched.fullName && formik.errors.fullName ? (
                    <ErrorMessage>{formik.errors.fullName}</ErrorMessage>
                ) : <ErrorBox></ErrorBox>}
            </InputField>

            <InputField>
                <Label htmlFor="email">*Email:</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder='johnrosie@gmailcom'
                />
                <Line color={formik.touched.email && formik.errors.email ? 'var(--error-color)' : null} />
                {formik.touched.email && formik.errors.email ? (
                    <ErrorMessage>{formik.errors.email}</ErrorMessage>
                ) : <ErrorBox></ErrorBox>}
            </InputField>

            <InputField>
                <Label htmlFor="phone">*Phone:</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    placeholder='380961234567'
                />
                <Line color={formik.touched.phone && formik.errors.phone ? 'var(--error-color)' : null} />
                {formik.touched.phone && formik.errors.phone ? (
                    <ErrorMessage>{formik.errors.phone}</ErrorMessage>
                ) : <ErrorBox></ErrorBox>}
            </InputField>

            <InputField>
                <Label htmlFor="message">Message:</Label>
                <TextArea
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    placeholder='My message....'
                />
                {formik.touched.message && formik.errors.message ? (
                    <ErrorMessage>{formik.errors.message}</ErrorMessage>
                ) : null}
            </InputField>
            <Box>
                <TransparentButton type="submit">
                    Submit
                </TransparentButton>
            </Box>
        </FormContainer>
    );
};

export default ContactForm;
