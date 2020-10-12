import React, { useState } from 'react';
import Modal from './comps/Modal';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <ImageGrid setSelectedImg ={setSelectedImg} />
  { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}


export default App;
