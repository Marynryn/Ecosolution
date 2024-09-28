import Address from 'components/common/Address/Address';
import ContactForm from 'components/common/ContactForm/ContactForm';
import Email from 'components/common/Email/Email';
import Phone from 'components/common/Phone/Phone';
import { SocialNetworks } from 'components/common/SocialNetworks/SocialNetworks';
import { Container } from 'components/ui/Container/Container';
import Subtitle from 'components/ui/Subtitle/Subtitle';
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
@media (min-width: 1280px){
    gap: 48px;
    margin-top:120px;
}
`;

const ContactUs = () => {
    return (
        <section id='contacts'>
            <Container>
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
            </Container>
        </section>
    )
}
export default ContactUs;