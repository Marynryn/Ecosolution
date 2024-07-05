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
@media (min-width: 768px){
    margin-top:40px;
display: grid;
gap:24px;
 grid-template-columns: 1fr 1fr;
}
`;

const ContactUs = () => {
    return (
        <div>
            <Subtitle>Contact Us</Subtitle>
            <ContactBox>
                <div>
                    <Phone />
                    <Email />
                    <Address />
                    <SocialNetworks />
                </div>
                <ContactForm />
            </ContactBox>
        </div>
    )
}
export default ContactUs;