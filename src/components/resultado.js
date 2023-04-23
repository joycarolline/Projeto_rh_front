import { Button, ButtonGroup, Table } from 'reactstrap';
import BarraMenu from "./barramenu";
import { Link } from 'react-router-dom';
import Arrow1 from './Imagens/Arrow1.png';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'; 




function MyVerticallyCenteredModal(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Visualização do currículo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Nome do candidato</h5>
        <p>
        Aqui tem que aparecer todas as informações sobre o candidato
          
        </p>
      </Modal.Body>
      <Modal.Footer>
         <input class="button-downloadpdf" type="button" value="Download PDF"></input>
      </Modal.Footer>
    </Modal>
  );
}

export default function Resultado (){
  const [modalShow, setModalShow] = useState(false);

    return(

        <>
        <BarraMenu/>

        <br/>
        <br/>
        <div class="result">
        <h6>Exibindo resultados</h6>
        <Button color="link" tag={Link} to="/" > 
                 <img src = {Arrow1} 
                   width="18"
                   height="11"
                   /> Editar filtros
                    </Button>{''}
       
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
                <tr>
                <td></td>
                <td></td>
                <td>

                <ButtonGroup>
                 <input class="button-visualizar" type="button" value="Visualizar" onClick={() => setModalShow(true)}/> 
                 
                 <MyVerticallyCenteredModal
                 show={modalShow}
                  onHide={() => setModalShow(false)}/>
                <input class="button-remover" type="button" value="Remover"/>
                </ButtonGroup>

                </td>
                </tr>

               }

            </tbody>


         </Table>
         
           <Modal>


           </Modal>
      
         </div>
        </>
        
   
    )
}


