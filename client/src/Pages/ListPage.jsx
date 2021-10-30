import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListPage = () => {


axios.defaults.baseURL = process.env.API_URL || 'http://localhost:5000';

const fetchMessages = async () => {
  const response = await axios.get('/');
  console.log('fetchMessages', response.data);
  if (response.status === 200) {
    return response.data;
  }
  return [];
};

/* const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    let getMessages = await fetchMessages();
    console.log('Got new message:', getMessages);
    setMessages(getMessages);
  }; */

  useEffect(() => {
    //loadMessages();
    fetchMessages();
  }, []);

  return (
    <div>
      List page
      <ul>
        <Link to="/1">
            Lista 1
        </Link>
        <Link to="/2">
            Lista 2
        </Link>
        <Link to="/3">
            Lista 3
        </Link>
      </ul>
    </div>
  )
}

export default ListPage
