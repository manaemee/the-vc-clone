import styled from "styled-components";
import { faCoins} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Container = styled.div`

`;
const Header = styled.header`
display:flex ;
padding:20px ;
background-color:${props=>props.theme.boxColor};
position:fixed;
top: 0;
width: 100%;
`;
const Title = styled.h1`
margin-left: 20px;
`;
function Home(){
    return (
        <Container>
            <Header>
                <FontAwesomeIcon icon={faCoins}/>
                <Title>데이터베이스</Title>
            </Header>
        </Container>
    );
}

export default Home;