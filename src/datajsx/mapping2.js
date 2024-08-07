import {mobile} from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Headmap from '../head2';
import Footer from '../footer';
import { Pitem } from './mapping';



function Maps2(){
    return(
    <div class="myphone">
      <Headmap/>
       <Container>
        <Row>
            {mobile.map((v,i)=>{
                return(
                    <Pitem person={v}/>
                )
            }
        )}
        </Row>
       </Container>
        <Footer/>
    </div>
    );
}
export default Maps2;


// function Mobiledata (phone){
//     return(
//      <div class='mb-4 col-lg-3'>
//          <Card style={{ width: '18rem' }}>
//          <Card.Body>
//         <Card.Img variant="top" src={phone.manyphone.image} height={250} />
//         <Card.Title>{phone.manyphone.name}</Card.Title>
//         <Card.Text>
//           {phone.manyphone.age}
//         </Card.Text>
//         <Button variant="primary">ADD To CART</Button>
//       </Card.Body>
//     </Card>
//      </div>
//     )
// }