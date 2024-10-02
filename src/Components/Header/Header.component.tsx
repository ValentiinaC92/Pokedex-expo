import { PropsWithChildren } from "react"
import { Container, Content } from "./Header.styled"

const Header = ({ children }: PropsWithChildren) => {

    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    )
}

export default Header;