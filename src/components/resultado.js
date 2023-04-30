import { Button, ButtonGroup, Table } from "reactstrap";
import BarraMenu from "./barramenu";
import { Link } from "react-router-dom";
import Arrow1 from "./Imagens/Arrow1.png";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Curriculo from "./curriculo";
import getcandidato from "./candidato";
import Remove from "./remove";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
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
        <br />
        <p>
          <Curriculo />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <input
          class="button-downloadpdf"
          type="button"
          value="Download PDF"
        ></input>
      </Modal.Footer>
    </Modal>
  );
}

export default function Resultado() {
  const [modalShowView, setModalShowView] = useState(false);
  const [modalShowRemove, setModalShowRemove] = useState(false);

  const [candidatos, setListaCandidato] = useState([]);

  useEffect(() => {
    setListaCandidato(getcandidato());
  }, []);

  return (
    <>
      <BarraMenu />

      <br />
      <br />
      <div class="result">
        <h6>Exibindo resultados</h6>
        <Button color="link" tag={Link} to="/">
          <img src={Arrow1} alt="flecha" width="18" height="11" /> Editar
          filtros
        </Button>
        {""}

        <br />
        <br />
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
            {candidatos.map((candidato) => (
              <tr>
                <td>{candidato.firstname}</td>
                <td>{candidato.email}</td>
                <td>
                  <ButtonGroup>
                    <input
                      class="button-visualizar"
                      type="button"
                      value="Visualizar"
                      onClick={() => setModalShowView(true)}
                    />

                    <MyVerticallyCenteredModal
                      show={modalShowView}
                      onHide={() => setModalShowView(false)}
                    />
                    <Remove
                      show={modalShowRemove}
                      onHide={() => setModalShowRemove(false)}
                    />
                    {/* <input
                      class="button-remover"
                      type="button"
                      s
                      value="Remover"
                      onClick={() => setModalShowRemove(true)}
                    /> */}
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
