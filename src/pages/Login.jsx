import styled from 'styled-components';
import { MiLogin } from '../components';




export  function Login() {

  
    
  return (
   
    <ContenR>
  
      <ContenRLeft className="container">
        <MiLogin/>
      </ContenRLeft>
      <BlockRight>
         
      </BlockRight>
    
  </ContenR>
  )
}

const ContenRLeft=styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ContenR=styled.div`
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const BlockRight=styled.div`
 background-image: url("/img/sign-wallpaper.jpg");
  background-position: center;
    background-size: cover;
    height: 100%;
    width: 50%;
`;