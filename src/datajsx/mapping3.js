import {third} from './data';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Headmap from '../head2';
import Footer from '../footer';
import { Pitem } from './mapping';



function Maps3(){
    return(
    <div class="myphone">
      <Headmap/>
       <Container>
        <Row>
            {third.map((v,i)=>{
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
export default Maps3;

// function Laptopdata (laptop){
//     return(
//      <div class='mb-4 col-lg-3'>
//          <Card style={{ width: '18rem' }}>
//          <Card.Body>
//         <Card.Img variant="top" src={laptop.multydata.image} height={280} />
//         <Card.Title>{laptop.multydata.name}</Card.Title>
//         <Card.Text>
//           {laptop.multydata.age}
//         </Card.Text>
//         <Button variant="primary">ADD To CART</Button>
//       </Card.Body>
//     </Card>
//      </div>
//     )
// }