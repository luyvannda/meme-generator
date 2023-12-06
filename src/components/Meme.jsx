import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import memesData from './memesData';

let url;

export default function Meme() {

  function handleClick() {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomIndex].url;
    console.log(url);
  }

  return (
    <div id='meme-component' className="container-fluid mt-3">
      <div className='mt-4 mx-3 mx-md-4'>
        <Row>
          <Col sm={9} md={6} className='mb-3'>
            <Form.Control placeholder="Shut up" />
          </Col>
          <Col sm={9} md={6} className='mb-3'>
            <Form.Control placeholder="and take my money" />
          </Col>
        </Row>

        <Col sm={9} md={12}>
          <Button onClick={handleClick} className='w-100 pt-2 pb-2 d-flex justify-content-center align-items-center gap-1' id='meme-button'
            type="submit">
            <p className='fs-6 fw-bold'>Get a new meme image </p>
            <img src="/painting-icon.png" alt="a painting icon" />
          </Button>
        </Col>
      </div>
    </div>
  )
}