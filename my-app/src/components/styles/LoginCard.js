import styled from 'styled-components'

const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    background-color:#DCAAFF;
    margin: 10px;
    padding: 20px 10px;
    border-radius: 10px;
    text-align: center;

    button{
        background-color: #0000CC;
        color:white;
        border-radius: 5px;
        border: 3px solid #AAAAFF;
        font-size: .75rem;
    }

    input{
        border-radius: 5px;
        border: none;
        margin: 3px;
       
    }
    label{
        display: flex;
        flex-direction: column;
    }
    .no-account{
        font-size: .75rem;
    }
`;
export default LoginCard