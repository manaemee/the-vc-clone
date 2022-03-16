import styled from "styled-components";
import { fetchCoins } from "./api";
import { useQuery } from "react-query";
const Container = styled.div`

`;
const Header = styled.header`
margin:5vh 0;
padding: 0px 40px;
font-size: 30px;
font-weight: 600;
`;
const Title = styled.div`
display: flex;
justify-content:center;
margin-bottom: 20px;
padding: 0px 40px;
*{
    width:33%;
}
span:nth-child(2){
text-align: center;
}
span:last-child{
    text-align:end ;
}
`
const Detail = styled.div`
height: 100vh;
overflow: scroll;
`;
const List = styled.ul`
li{
    padding: 0px 40px;
    display:flex;
    justify-content:center ;
    align-items:center ;
    *{
        width: 33%;
    }
    div{
        img{
            width: 40px;
            height: 40px;
            border-radius:50% ;
        }
    }
    span{
        text-align:center ;
    }
    span:last-child{
        text-align:end ;
    }
    margin-bottom:10px ;
}
`;
interface Icoins{
    name:string;
    id:string;
    symbol:string;
    image:string;
    market_cap:number;
    market_cap_rank:number;
    price_change_percentage_24h:number;
    }
function Lookup(){
    const {isLoading, data} = useQuery<Icoins[]>("allCoins", fetchCoins);
    return (
        <Container>
            <Header>
                <span>투자/M&A탐색</span>
            </Header>
            {isLoading ? "Wait a minute" : 
            <Detail>
                <Title>
                    <span>coin</span>
                     <span>market_cap(USD)</span>
                     <span>change during the day</span>
                </Title>
                <List>
                {data?.map((coin)=>
                     <li>
                         <div>
                        <img src={coin.image}/>
                        <span>{coin.symbol}</span> 
                        </div>
                        <span>{coin.market_cap}</span>
                        <span>{coin.price_change_percentage_24h}</span>  
                     </li>
                     )}
                </List>
            </Detail>
            }
        </Container>
    );
}

export default Lookup;