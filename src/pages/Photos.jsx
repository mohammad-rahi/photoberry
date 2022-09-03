import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import Modal from '../components/Cards/Modal';
import UploadPhotos from '../components/UploadPhotos/UploadPhotos';

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (!authToken) {
      navigate('/login');
    }
  }, [])

  return (
    <div style={{minHeight: "100vh"}}>
      <UploadPhotos />
      <Cards setSelectedImage={setSelectedImage} />
      <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  )
}

export default Photos