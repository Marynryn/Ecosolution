import Paragraph from 'components/Paragraph/Paragraph'
import SocialIcons from 'components/SocialIcons/SocialIcons'
import React from 'react'

export const SocialNetworks = () => {
    return (
        <div>
            <Paragraph>Social Networks:</Paragraph>
            <div style={{ marginTop: "8px" }}>
                <SocialIcons props={{ gap: "32px", fill: "var(--main-color)", stroke: "var(--main-color)", hoverFill: "var(--accent-color)", hoverStroke: "var(--accent-color)" }} /></div>
        </div>
    )
}
