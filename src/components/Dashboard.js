import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Dashboard = () => {
  const distributors = [
    {
      name: 'Distributor A',
      shippedLastMonth: 100,
      forecastedThisMonth: 150,
      averageShipped: 120,
    },
    {
      name: 'Distributor B',
      shippedLastMonth: 80,
      forecastedThisMonth: 90,
      averageShipped: 95,
    },
    {
      name: 'Distributor C',
      shippedLastMonth: 130,
      forecastedThisMonth: 110,
      averageShipped: 100,
    },
    // Add more distributors as needed
  ]

  return (
    <Container>
      <h1 className="text-center mt-4">Augur Dashboard</h1>
      <Row className="mt-4">
        {distributors.map((distributor) => (
          <Col key={distributor.name} md={4} sm={6} xs={12}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{distributor.name}</Card.Title>
                <Card.Text>
                  Shipped Last Month: {distributor.shippedLastMonth}
                </Card.Text>
                <Card.Text>
                  Forecasted This Month: {distributor.forecastedThisMonth}
                </Card.Text>
                <Card.Text>
                  Year-to-Date Average: {distributor.averageShipped}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Dashboard
