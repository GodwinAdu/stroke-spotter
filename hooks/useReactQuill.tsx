

"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction
    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean'], // remove formatting button
  ],
};

export const useReactQuill = () => {
    const [value, setValue] = useState('');
  
    const handleChange = (newValue:string) => {
      setValue(newValue);
    };
  
    
  
    return { value, handleChange, modules };
  };