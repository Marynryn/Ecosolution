import Paragraph from 'components/Paragraph/Paragraph'
import SocialIcons from 'components/SocialIcons/SocialIcons'
import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
margin-top: 8px;
@media (min-width:1280px){
margin-top: 16px;
}
`;
export const SocialNetworks = () => {
    return (
        <div>
            <Paragraph>Social Networks:</Paragraph>
            <Box >
                <SocialIcons props={{ gap: "32px", fill: "var(--main-color)", stroke: "var(--main-color)", hover: "var(--accent-color)", }} /></Box>
        </div>
    )
}
