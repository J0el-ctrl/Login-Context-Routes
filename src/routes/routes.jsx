import {
    BrowserRouter,
    Routes,
    Route,
   } from 'react-router-dom';
import {Home, Intranet, Login, PaginaNoEncontrada, Registro} from '../pages';

import {UsuarioContext} from '../contexto/UsuarioProvider';
import {useContext} from 'react';

export  function MyRoutes() {
    
    const {user}=useContext(UsuarioContext);

  return (
<BrowserRouter>
    <Routes>
        {
            user? <Route exact path='/intranet' element={<Intranet/>}/>  : console.log("usuario no detectado")
        }
      
    
            <Route exact path='/login' element={<Login/>}/>
             <Route exact path='/registrar' element={<Registro/>}/>
            <Route exact path='/' element={<Home/>}/>         
            <Route exact path='*' element={<PaginaNoEncontrada/>}/>
    </Routes>
</BrowserRouter>
  ) 
}
