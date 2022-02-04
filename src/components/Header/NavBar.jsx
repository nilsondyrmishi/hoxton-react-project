import styled from 'styled-components'
import * as PropTypes from "prop-types";
import Links from './Links'
import Announcement from "./Annoucement";

const Container=styled.div`
  height: 50px;
`
const Wrapper =styled.div`
  background-color: aqua;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left =styled.div`
  flex: 1;
`

const Center =styled.div`
flex: 1;
  text-align: center;`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`


const Logo =styled.h1`
  font-weight: bold;`



function MailIcon() {
    return null;
}

MailIcon.propTypes = {color: PropTypes.string};

function NavBar(users,setUsers){

    return(

    <Container>
        <Announcement/>
        <Wrapper>
            <Left>
               <Links to="/clothes" className="nav-link">
                   Clothes
               </Links>
                <Links to="/clothes" className="nav-link">
                    Clothes
                </Links>
            </Left>
            <Center>
                <Logo> <Links to="/" className="nav-link">
                    LOGO.
                </Links></Logo>
            </Center>
            <Right>
                {users===null ? (
                    <Links to="/login" className="nav-link">
                        LOG IN
                    </Links>
                ):(
                    <Links to="/login" className="nav-link"
                           onClick={()=>{
                               setUsers(null);
                           }}>
                        LOG OUT
                    </Links>
                )}
                {users !==null &&(
                    <Links to="/bucket" className="nav-link">
                        Bucket
                    </Links>
                )}
            </Right>
        </Wrapper>
    </Container>)
}
export default NavBar
