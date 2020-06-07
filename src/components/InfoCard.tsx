import React from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  title?: string,
  subtitle?: string,
  content: string,
  bg?: "light" | "primary" | "info" | "secondary" | "success" | "danger" | "warning" | "dark",
  link?: {
    href: string,
    title: string
  }
}

const InfoCard: React.FC<Props> = (props) => {
  console.log(props.bg)
  return (
    <Card bg={props.bg === undefined ? "light" : props.bg } text={(props.bg === 'light' || props.bg === undefined) ? "dark" : "white" }>
      <Card.Body>
        <Card.Title>
          <h2>{props.title}</h2>
        </Card.Title>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
    
  )
}

export default InfoCard;