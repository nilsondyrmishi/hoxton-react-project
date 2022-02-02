import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import {Badge} from "@mui/material";
import * as PropTypes from "prop-types";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';




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

const SearchContainer=styled.div`
  //border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
border: none`

const Logo =styled.h1`
  font-weight: bold;`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px`

function MailIcon() {
    return null;
}

MailIcon.propTypes = {color: PropTypes.string};

function NavBar(){

    return(
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontSize:15}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>LOGO.</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                    <ShoppingCartTwoToneIcon />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>)
}
export default NavBar
