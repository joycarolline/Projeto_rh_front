      import Navbar from 'react-bootstrap/Navbar';
      import './BarraMenu.css';
      import taking from './Imagens/taking.jpg';

      
      function BarraMenu() {
        return (
          <>
         
            <Navbar className="justify-content-center" bg="white">
              
                <Navbar.Brand href="#">
                  <img src = {taking}
                   alt = "logo"
                   width="64"
                   height="36"
                
                  />
                </Navbar.Brand>
              
            </Navbar>
            </>
        );
      }
      
      export default BarraMenu;

