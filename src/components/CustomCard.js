import Card from 'react-bootstrap/Card';

function CustomCard(props) {
  return (
    <Card className='CustomCard' style={{borderRadius:25}}>
      <Card.Img variant="top" src={props.img} style={{borderRadius:"inherit",width:"100%"}}/>
      <Card.Body>
        <Card.Title className='CardTitle'>{props.title}</Card.Title>
        <Card.Text className="CardText">
          {props.text}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CustomCard;