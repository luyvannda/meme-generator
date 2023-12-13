import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import memesData from './memesData';
import { useState } from 'react';

/**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

let url;

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomIndex].url;
    setMemeImage(url)
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
          <Button onClick={getMemeImage} className='w-100 pt-2 pb-2 d-flex justify-content-center align-items-center gap-1' id='meme-button'
            type="submit">
            <p className='fs-6 fw-bold'>Get a new meme image </p>
            <img src="/painting-icon.png" alt="a painting icon" />
          </Button>
        </Col>

        <Col sm={9} md={12} className='pt-4 mt-3 d-flex justify-content-center'>
          <img className='img-fluid rounded w-md-50 h-md-50 w-xl-75 h-xl-75 w-xxl-100 h-xxl-100' src={memeImage} alt="a random meme image" />
        </Col>
      </div>


    </div>
  )
}