
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {data} from './data';
import Headmap from '../head2';
import Footer from '../footer';



function Maps() {
  return (
    <div className="App">
    <Headmap/>
      <Container>
        <Row>
          {data.map((v)=>{
            return(
              <Pitem person={v}/>
            )
          })}
        </Row>
      </Container>
     <Footer/>
    </div>
  );
}

export default Maps;




function Pitem(props) {  //props means chield parent ki value get karega
  return (
    <div class='mb-4 col-lg-3'>
    <Card style={{ width: '15rem', marginLeft:'auto', marginRight:'auto', marginTop:'30px' }}>
    <Card.Body> 
      <Card.Img variant="top" src={props.person.image} style={{height:'280px'}} />
        <Card.Title>{props.person.name}</Card.Title>
        <Card.Text>
          {props.person.age}
        </Card.Text>
        <Button variant="primary">{props.person.gender}</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export {Pitem};




