import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListPage = () => {

  const [lists, setLists] = useState([]);

  function getAllLists() { 
    axios.get('http://localhost:5000/')
      .then(response => {
        setLists(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    getAllLists();
  }, []);

  return (
    <div>
      List page
        {lists ? (
          lists.map((value) => {
          return <>
            <p><Link to={`/${value._id}`} list={value}> {value.title} </Link></p>
            </>
          })

        ):
          <h1>Loading...</h1>
        }
    </div>
  )
}

export default ListPage
