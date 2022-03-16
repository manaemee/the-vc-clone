import styled from "styled-components";
import { faCoins} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lookup from "./Lookup";



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

const Rankingwarp = styled.div`
margin:0 auto ;
display:flex ;
max-width: 95%;
margin-top:10vh ;
overflow: scroll;
`;
const Hero = styled.div`
min-width:25% ;
padding: 16px;
background-color:${props=>props.theme.boxColor} ;
border-radius:20px ;
margin-right:20px ;
`;
const Ranking = styled.div`

`;
const Category = styled.div`
display:flex ;
margin-bottom:10px ;
h1{
    margin-left:10px ;
}
`;
const List = styled.ul`
`;
const Each = styled.li`
display:flex ;
justify-content:space-between ;
width:100% ;
margin-bottom:10px ;
`;
const Imgbox = styled.div`
display: flex;
margin-right:8px ;
span{
    margin-right:20px ;
}
img{
    width: 40px;
    height: 40px;
    border-radius:50% ;
    margin-right:15px ;
}
div{
    display:flex ;
    flex-direction:column ;
    justify-content:space-between ;
}
`;
const Amount = styled.div`
display:flex;
flex-direction:column ;
justify-content:space-between ;
`;


function Home(){
  
    return (
        <Container>
            <Header>
                <FontAwesomeIcon icon={faCoins}/>
                <Title>데이터베이스</Title>
            </Header>
            <Rankingwarp>
            <Hero>
                <Ranking>
                    <Category>
                        <FontAwesomeIcon icon={faCoins}/>
                        <h1>투자유치랭킹</h1>
                    </Category>
                    <List>
                        <Each>
 
                            <Imgbox>
                                 <span>1</span>
                                <img src="https://image.newdaily.co.kr/site/data/img/2020/11/12/2020111200162_0.png"/>
                                <div>
                                    <span>쏘카</span>
                                    <span>쏘카</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>2</span>
                                <img src="http://photo.sentv.co.kr/photo/2019/07/12/20190712035335.png"/>
                                <div>
                                    <span>비바리퍼블리카</span>
                                    <span>토스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>3</span>
                                <img src="https://image.rocketpunch.com/company/79452/beeorobotigseukoria_logo_1591678224.png?s=400x400&t=inside"/>
                                <div>
                                    <span>베어로보틱스</span>
                                    <span>페니</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>4</span>
                                <img src="https://contents.nextunicorn.kr/company/3ab54d06aab375d7/profile-346b17f1f8af844eb6e6653019594ffb92ca.png?s=200x&t=cover"/>
                                <div>
                                    <span>가제트코리아</span>
                                    <span>유심사</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>5</span>
                                <img src="https://contents.sixshop.com/uploadedFiles/84877/default/image_1547266592991.jpg"/>
                                <div>
                                    <span>킥더허들</span>
                                    <span>피토틱스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                    </List>
                </Ranking>
            </Hero>
            <Hero>
                <Ranking>
                    <Category>
                        <FontAwesomeIcon icon={faCoins}/>
                        <h1>투자유치랭킹</h1>
                    </Category>
                    <List>
                        <Each>
 
                            <Imgbox>
                                 <span>1</span>
                                <img src="https://image.newdaily.co.kr/site/data/img/2020/11/12/2020111200162_0.png"/>
                                <div>
                                    <span>쏘카</span>
                                    <span>쏘카</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>2</span>
                                <img src="http://photo.sentv.co.kr/photo/2019/07/12/20190712035335.png"/>
                                <div>
                                    <span>비바리퍼블리카</span>
                                    <span>토스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>3</span>
                                <img src="https://image.rocketpunch.com/company/79452/beeorobotigseukoria_logo_1591678224.png?s=400x400&t=inside"/>
                                <div>
                                    <span>베어로보틱스</span>
                                    <span>페니</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>4</span>
                                <img src="https://contents.nextunicorn.kr/company/3ab54d06aab375d7/profile-346b17f1f8af844eb6e6653019594ffb92ca.png?s=200x&t=cover"/>
                                <div>
                                    <span>가제트코리아</span>
                                    <span>유심사</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>5</span>
                                <img src="https://contents.sixshop.com/uploadedFiles/84877/default/image_1547266592991.jpg"/>
                                <div>
                                    <span>킥더허들</span>
                                    <span>피토틱스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                    </List>
                </Ranking>
            </Hero>
            <Hero>
                <Ranking>
                    <Category>
                        <FontAwesomeIcon icon={faCoins}/>
                        <h1>투자유치랭킹</h1>
                    </Category>
                    <List>
                        <Each>
 
                            <Imgbox>
                                 <span>1</span>
                                <img src="https://image.newdaily.co.kr/site/data/img/2020/11/12/2020111200162_0.png"/>
                                <div>
                                    <span>쏘카</span>
                                    <span>쏘카</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>2</span>
                                <img src="http://photo.sentv.co.kr/photo/2019/07/12/20190712035335.png"/>
                                <div>
                                    <span>비바리퍼블리카</span>
                                    <span>토스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>3</span>
                                <img src="https://image.rocketpunch.com/company/79452/beeorobotigseukoria_logo_1591678224.png?s=400x400&t=inside"/>
                                <div>
                                    <span>베어로보틱스</span>
                                    <span>페니</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>4</span>
                                <img src="https://contents.nextunicorn.kr/company/3ab54d06aab375d7/profile-346b17f1f8af844eb6e6653019594ffb92ca.png?s=200x&t=cover"/>
                                <div>
                                    <span>가제트코리아</span>
                                    <span>유심사</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>5</span>
                                <img src="https://contents.sixshop.com/uploadedFiles/84877/default/image_1547266592991.jpg"/>
                                <div>
                                    <span>킥더허들</span>
                                    <span>피토틱스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                    </List>
                </Ranking>
            </Hero>
            <Hero>
                <Ranking>
                    <Category>
                        <FontAwesomeIcon icon={faCoins}/>
                        <h1>투자유치랭킹</h1>
                    </Category>
                    <List>
                        <Each>
 
                            <Imgbox>
                                 <span>1</span>
                                <img src="https://image.newdaily.co.kr/site/data/img/2020/11/12/2020111200162_0.png"/>
                                <div>
                                    <span>쏘카</span>
                                    <span>쏘카</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>2</span>
                                <img src="http://photo.sentv.co.kr/photo/2019/07/12/20190712035335.png"/>
                                <div>
                                    <span>비바리퍼블리카</span>
                                    <span>토스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>3</span>
                                <img src="https://image.rocketpunch.com/company/79452/beeorobotigseukoria_logo_1591678224.png?s=400x400&t=inside"/>
                                <div>
                                    <span>베어로보틱스</span>
                                    <span>페니</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>4</span>
                                <img src="https://contents.nextunicorn.kr/company/3ab54d06aab375d7/profile-346b17f1f8af844eb6e6653019594ffb92ca.png?s=200x&t=cover"/>
                                <div>
                                    <span>가제트코리아</span>
                                    <span>유심사</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>5</span>
                                <img src="https://contents.sixshop.com/uploadedFiles/84877/default/image_1547266592991.jpg"/>
                                <div>
                                    <span>킥더허들</span>
                                    <span>피토틱스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                    </List>
                </Ranking>
            </Hero>
            <Hero>
                <Ranking>
                    <Category>
                        <FontAwesomeIcon icon={faCoins}/>
                        <h1>투자유치랭킹</h1>
                    </Category>
                    <List>
                        <Each>
 
                            <Imgbox>
                                 <span>1</span>
                                <img src="https://image.newdaily.co.kr/site/data/img/2020/11/12/2020111200162_0.png"/>
                                <div>
                                    <span>쏘카</span>
                                    <span>쏘카</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>2</span>
                                <img src="http://photo.sentv.co.kr/photo/2019/07/12/20190712035335.png"/>
                                <div>
                                    <span>비바리퍼블리카</span>
                                    <span>토스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>3</span>
                                <img src="https://image.rocketpunch.com/company/79452/beeorobotigseukoria_logo_1591678224.png?s=400x400&t=inside"/>
                                <div>
                                    <span>베어로보틱스</span>
                                    <span>페니</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>4</span>
                                <img src="https://contents.nextunicorn.kr/company/3ab54d06aab375d7/profile-346b17f1f8af844eb6e6653019594ffb92ca.png?s=200x&t=cover"/>
                                <div>
                                    <span>가제트코리아</span>
                                    <span>유심사</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                        <Each>
                            <Imgbox>
                                <span>5</span>
                                <img src="https://contents.sixshop.com/uploadedFiles/84877/default/image_1547266592991.jpg"/>
                                <div>
                                    <span>킥더허들</span>
                                    <span>피토틱스</span>
                                </div>
                            </Imgbox>
                            <Amount>
                                <span>1832억</span>
                                <span>Series G</span>
                            </Amount>  
                        </Each>
                    </List>
                </Ranking>
            </Hero>
            </Rankingwarp>
            <Lookup/>
        </Container>
    );
}

export default Home;