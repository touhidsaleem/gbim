import React from 'react'
import Tab from '../shared/Tab/Tab'
import Button from '../shared/Button/Button'
import ProfileCard from '../shared/ProfileCard/ProfileCard'

const Header = () => {
    return (
        <header>
            <img src='https://www.dmcockpit.com/_next/image?url=%2Fimages%2Fdark-logo.png&w=640&q=75' />
            <Tab variant="dark" />
            <Button text="My Plan" variant="success" iconClass="vip-crown-fill" />
            <ProfileCard name="John Doe" role="Project Manager" avatar={null} />

        </header>
    )
}

export default Header


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/touhidsaleem/gbim.git
// git push -u origin main