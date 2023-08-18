import {  useNavigate } from "react-router-dom";
import {dbapp} from '../firebase/firebase';
import {getAuth,signOut} from 'firebase/auth';
const auth=getAuth(dbapp);

export  function Home() {
  const navigate = useNavigate();


  const CerrarSesion=()=>{
    signOut(auth);
    console.log("sesion terminada");
    navigate("/login")
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={CerrarSesion}>Cerrar Session</button>
    </div>
  )
}
 