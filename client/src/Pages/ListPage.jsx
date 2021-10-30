import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListPage = () => {

  const [messages, setMessages] = useState([]);

  async function fetchData() {
    const url = 'http://localhost:5000';

    await fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMessages(data);
      })
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      List page
      <p>
      {messages}
      </p>
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
