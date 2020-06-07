import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import {Button, Container, Jumbotron, Row, Col} from 'react-bootstrap';

import datesService from '../../services/datesService';
import './styles.css'

const Home = () => {

  const [monthName, setMonthName] = useState('');
  const [dateToPayment, setDateToPayment] = useState(0);

  useEffect(() => {
    setDateToPayment(datesService.daysToPayment())
  }, [])

  useEffect(() => {
    setMonthName(datesService.monthName());
  },[])

  return (
    <>
      <Header />
      
      <Container className="mt-4">
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

        <Row>
          <Col md={4}>
            <InfoCard title={monthName} bg="info" content="Mês atual"/>
          </Col>
          <Col md={4}>
            <InfoCard title={`${dateToPayment} dias`} bg={ dateToPayment < 5 ? 'success' : 'warning' } content="Para receber o proximo aluguel"/>
          </Col>
        </Row>
        
      </Container>
    </>
  )
}

export default Home;