import styled from 'styled-components'

const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 45%;
    background-color:#DCAAFF;
    margin: 10px;
    padding: 20px 10px;
    border-radius: 10px;

    button{
        background-color: #0000CC;
        color:white;
        border-radius: 5px;
    }

    input{
        border-radius: 5px;
        border: none;
       
    }

    .no-account{
        font-size: .5rem;
    }
`;
export default LoginCard