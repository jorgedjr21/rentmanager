import React from 'react';
import Header from '../../components/Header';
import {Button, Container, Jumbotron, Row, Col} from 'react-bootstrap';
import './styles.css'

const Home = () => {
  return (
    <>
      <Header />
      
      <Container>
        <Row>
          <Col>
          <Jumbotron>
            <h1>Gerenciador de Alugueis</h1>
            <p>
              Gerencie os seus alugueis e mantenha em dia todo os pagamentos dos seus inquilinos
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;