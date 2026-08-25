"use client"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/common/Breadcrumbs';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const page = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleOpen = (imgSrc) => {
    setCurrentImage(imgSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Breadcrumb
        pageName="Our Gallery"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
    <Box sx={{ width:"100%", minHeight: 829 ,p:4}}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index} onClick={() => handleOpen(item.img)}>
            <Label>{index + 1}</Label>
            <Image
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              width={250}
              height={300}
              style={{
                cursor: 'pointer',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Image width={300} height={250} src={currentImage} alt="Enlarged" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </Box>
      </Modal>
    </Box>
    </>
  );
}

export default page;

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
      title: 'Snacks',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
      title: 'Tower',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
      title: 'Tree',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
      title: 'Camping Car',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
      title: 'Mountain',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];