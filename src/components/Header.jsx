import { Button } from './styles/Button.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Image, Logo, Nav, StyleHeader } from './styles/Header.styled'

const Header = () => {
  return (
   <StyleHeader>
    <Container>
      <Nav>
        <Logo src='./images/logo.svg' alt=''/>
        <Button>
          try it free
        </Button>
      </Nav>

      <Flex>
        <div>
          <h1>Bild The Community Your Fans Will</h1>

          <p>Lorem Non saepe doloremque labore deserunt eligendi. Nesciunt fuga aspernatur esse. Ex officiis eligendi uumus aperiam, provident sequi, ipsa tempore impedit ad obcaecati. Quis corrupti aliquam mollitia exercitationem expedita debitis, voluptate consequuntur at repellat voluptatem animi quidem voluptas dignissimos provident incidunt rerum harum sapiente, corporis nulla ad hic delectus qui maiores infugiat quos omnis ipsam hic, animi, dolore itaque officia ipsa, possimus odit. Delectus, illum.</p>

          <Button bg='#ff0099' color='#fff'>
            Get Started For Free
          </Button>
        </div>

        <Image src='./images/illustration-mockups.svg' alt=''/>
      </Flex>
    </Container>
   </StyleHeader>
  )
}

export default Header
