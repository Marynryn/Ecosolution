import Address from 'components/Address/Address';
import ContactForm from 'components/ContactForm/ContactForm';
import Email from 'components/Email/Email';
import Phone from 'components/Phone/Phone';
import { SocialNetworks } from 'components/SocialNetworks/SocialNetworks';
import Subtitle from 'components/Subtitle/Subtitle';
import React from 'react'
import styled from 'styled-components';


const ContactBox = styled.div`
margin-top:24px;
`;

const ContactUs = () => {
    return (
        <div>
            <Subtitle>Contact Us</Subtitle>
            <ContactBox>
                <Phone />
                <Email />
                <Address />
                <SocialNetworks />

                <ContactForm />
            </ContactBox>
        </div>
    )
}
export default ContactUs;