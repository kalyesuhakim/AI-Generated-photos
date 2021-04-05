import axios from 'axios';
import React, { useState } from 'react'
import './App.css'
const App = () => {
const API_KEY = "7X2OitnHmo2aAlDbLNg5jw"
const [image,setImage] = useState('');

const handleChange = () => {
  axios.get(`https://api.generated.photos/api/v1/faces?api_key=${API_KEY}&order_by=random`).then(res => {
    const url = res.data.faces[0].urls[4][512];
    setImage(url)
  }).catch(err =>{
    console.log(err)
  })
}
  return (
    <div className="APP">
       <h1>AI PHOTO GENERATOR</h1>
       {image && <img src={image} alt="AI FACE" />}
       <button type='button' onClick={handleChange}>New Image</button>
    </div>
  )
}

export default App
