import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListDetailPage = (props) => {

  const [lists, setLists] = useState([]);

  function getAllLists() { 
    axios.get(`http://localhost:5000/${props.match.params.id}`) 
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
    <div className="container">
      <h1>{lists.title}</h1>
      <ul>
        {lists.items ? (
          lists.items.map((item) => {
            return <li>{item}</li>
          })) : "no items"}
      </ul>
    </div>
  )
}

export default ListDetailPage
