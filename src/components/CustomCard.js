import Card from 'react-bootstrap/Card';

function CustomCard(props) {
  return (
    <Card className='CustomCard' style={{borderRadius:25}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title ><div style={{color:"#D1A55C"}}>{props.title}</div></Card.Title>
        <Card.Text style={{marginBottom:"50px"}}>
          {props.text}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CustomCard;