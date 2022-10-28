import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard(props) {
  return (
    <Card className='CustomCard' style={{borderRadius:25}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title ><div style={{color:"#D1A55C"}}>{props.title}</div></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{marginBottom:"0.8cm"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;