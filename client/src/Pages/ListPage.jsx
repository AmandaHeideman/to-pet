import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListPage = () => {

  const [lists, setLists] = useState([]);



  function getAllLists() { //innan något visas på sidan så kommer den här att köras. här kommer grejer hämtas från db
    axios.get('http://localhost:5000/') //Det här är bara för att välja user som redan finns i databas
      .then(response => {
        //console.log(response.data)
        setLists(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }


  useEffect(() => {
    getAllLists();
  }, []);

  /* 
    async function fetchData() {
      const url = 'http://localhost:5000';
  
      await fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setLists(data);
        })
    };
  
  
    useEffect(() => {
      fetchData();
    }, []); */

  return (
    <div>
      List page
      <p>
        {JSON.stringify(lists[0].title)}

        {lists.map((value, key) => {
          return <p> {value} </p>
        })

        }

        {/* messages mappas igenom, varje value genererar en li med länk till /:id */}
        {/* 
      <ul>
      messages.map((value, key) => {
        return <Link to="/:value.id">value.title</Link>
      })
      </ul>
       */}
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
