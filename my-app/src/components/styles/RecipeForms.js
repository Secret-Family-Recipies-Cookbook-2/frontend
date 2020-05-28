import styled from 'styled-components'

const RecipeForms = styled.div`
  display:flex;
  flex-direction:column;
  /* align-items:flex-end; */
  background-color:  #DCAAFF;
  width: 45%;
  margin: 10px;
  padding: 15px;
  border: 5px solid  #AAAAFF;
  border-radius: 10px;

    input, textarea {
      margin: 5px 0;
    }

    label{
      display:flex;
      flex-direction:column;
    }

    .submitBtn {
      width: 50%;
      margin: 2% 25%;
      padding: 5px 0;
      border: 3px solid #AAAAFF;
      border-radius: 5px;
      background-color: #0000CC;
      color: white;
    }

    button{
      width: 50%;
      margin: 2% 25%;
      padding: 5px 0;
      border: 3px solid darkred;
      border-radius: 5px;
      background-color: crimson;
      color: white;
    }
`

export default RecipeForms