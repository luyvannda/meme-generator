import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState, useEffect } from 'react';

let url;

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  const [allMemes, setAllMemes] = useState({});

  useEffect(() => {

    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }

    getMemes()

  }, [])


  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    url = allMemes[randomIndex].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div id='meme-component' className="container-fluid mt-3">
      <div className='mt-4 mx-3 mx-md-4'>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={9} md={6} className='mb-3'>
              <Form.Control
                name='topText'
                placeholder='Top text'
                value={meme.topText}
                onChange={handleChange}
              />
            </Col>
            <Col sm={9} md={6} className='mb-3'>
              <Form.Control
                name="bottomText"
                placeholder='Bottom text'
                value={meme.bottomText}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Col sm={9} md={12}>
            <Button onClick={getMemeImage} className='w-100 pt-2 pb-2 d-flex justify-content-center align-items-center gap-1' id='meme-button'
              type="submit">
              <p className='fs-6 fw-bold'>Get a new meme image </p>
              <img src="painting-icon.png" alt="a painting icon" />
            </Button>
          </Col>
        </Form>

        <Col sm={9} md={12} className='meme--container py-4 my-3 d-flex justify-content-center'>
          <img className='img-fluid rounded' src={meme.randomImage} alt="a random meme image" />

          <h2 className='meme--text top mt-3 pt-3 text-white text-center text-uppercase'
          >{meme.topText}</h2>
          <h2 className='meme--text bottom mb-3 pb-3 text-white text-center text-uppercase'
          >{meme.bottomText}</h2>
        </Col>
      </div>

    </div>
  )
}