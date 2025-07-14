import React from 'react'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quidem quis nostrum? Perferendis, ipsum reprehenderit? Nobis quia sint reprehenderit pariatur.</li>
                <li>+1-567-789-3453</li>
                <li>example@gmail.com</li>
            </ul>

            <ul>
                <li>About us</li>
                <li>What we do</li>
                <li>FAQ</li>
            </ul>

            <ul>
                <li>Carrer</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>

            <SocialIcons/> 
        </Flex>

        <p>&copy; 2021 Huggle</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
