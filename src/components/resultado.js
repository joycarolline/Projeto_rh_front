import { Button, Table } from 'reactstrap';
import BarraMenu from "./barramenu";
import { Link } from 'react-router-dom';
import Arrow from './Imagens/Arrow.png';


export default function Resultado (){

    return(

        <>
        <BarraMenu/>

        <br/>
        <br/>
        <div class="result">
        <h6>Exibindo resultados</h6>
        <Button class="botao-link" color="link" tag={Link} to="/" > 
                 <img src = {Arrow}
                   width="18"
                   height="13"
                
                   /> Editar filtros </Button>{''}
       
        <br/>
        <br/>
        </div>

        <div class="table">
         <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>

               {

               }

            </tbody>


         </Table>
        
      
         </div>
        </>
        
   
    )
}
