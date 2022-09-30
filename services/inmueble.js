import axios from 'axios';
import { useState } from 'react';
import image from '../components/inmuebles/img/foto1.jpeg';

import agent from '../components/inmuebles/img/agent.png';
const baseUrl = '';

export const inmuebles = [
  {
    description: 'Description inmueble',
    title: 'Titulo inmueble',
    price: 1000,
    numbeOfAmbients: 1,
    minSquareMeters: 30,
    maxSquareMeters: 45,
    image: image,
    user: agent,
  },
  {
    description: 'Description inmueble2',
    title: 'Titulo inmueble2',
    price: 3000,
    numbeOfAmbients: 3,
    minSquareMeters: 30,
    maxSquareMeters: 60,
    image: image,
    user: agent,
  },
  {
    description: 'Description inmueble3',
    title: 'Titulo inmueble3',
    price: 2000,
    numbeOfAmbients: 2,
    minSquareMeters: 20,
    maxSquareMeters: 40,
    image: image,
    user: agent,
  },
];

export const useFetch = (url) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus('fetching');
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setStatus('fetched');
    };

    fetchData();
  }, [url]);

  return { status, data };
};
