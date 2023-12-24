import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import memesData from './memesData';
import { useState } from 'react';

/**
    * Challenge: 
    * 1. Set up the text inputs to save to
    *    the `topText` and `bottomText` state variables.
    * 2. Replace the hard-coded text on the image with
    *    the text being saved to state.
    */

let url;

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  // eslint-disable-next-line no-unused-vars
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomIndex].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <div id='meme-component' className="container-fluid mt-3">
      <div className='mt-4 mx-3 mx-md-4'>
        <Form>
          <Row>
            <Col sm={9} md={6} className='mb-3'>
              <Form.Control
                name='topText'
                value={meme.topText}
                onChange={handleChange}
              />
            </Col>
            <Col sm={9} md={6} className='mb-3'>
              <Form.Control
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Col sm={9} md={12}>
            <Button onClick={getMemeImage} className='w-100 pt-2 pb-2 d-flex justify-content-center align-items-center gap-1' id='meme-button'
              type="submit">
              <p className='fs-6 fw-bold'>Get a new meme image </p>
              <img src="/painting-icon.png" alt="a painting icon" />
            </Button>
          </Col>
        </Form>



        <Col sm={9} md={12} className='meme--container py-4 my-3 d-flex justify-content-center'>
          <img className='img-fluid rounded w-md-50 h-md-50 w-xl-75 h-xl-75 w-xxl-100 h-xxl-100' src={meme.randomImage} alt="a random meme image" />

          <h2 className='meme--text top mt-3 pt-3 text-white text-uppercase'
          >{meme.topText}</h2>
          <h2 className='meme--text bottom mb-3 pb-3 text-white text-uppercase'
          >{meme.bottomText}</h2>
        </Col>
      </div>


    </div>
  )
}