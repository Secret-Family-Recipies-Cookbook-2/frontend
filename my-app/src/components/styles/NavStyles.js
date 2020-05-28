import styled from 'styled-components'

const NavStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #AAAAFF;
    height: 10vh;
    padding:0 10px ;

    
    a{
        text-decoration:none;
        font-weight: 700;
        color:darkslateblue;
    }

    button{
       border: 3px solid #AAAAFF;
       border-radius: 5px;
       background-color: #0000CC;
       color: white;

    }


`;
export default NavStyles