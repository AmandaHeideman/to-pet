import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = axios.create({
  baseURL: process.env.API_KEY || 'http://localhost:5000'
});


const ListPage = () => {

  const [lists, setLists] = useState([]);
  const [listTitle, setListTitle] = useState("");
  const [listItem, setListItem] = useState([]);

  function getAllLists() {
    url.get('/')
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(listTitle)

    url.post('/', {
      title: listTitle,
      listItem: listItem
    })
      .then(res => console.log(res))
  }


  return (
    <div className="container">
      List page
      {lists ? (
        lists.map((value) => {
          return <>
            <p><Link to={`/${value._id}`} list={value}> {value.title} </Link></p>
          </>
        })

      ) :
        <h1>Loading...</h1>
      }

      <form method="POST" onSubmit={handleOnSubmit}>
        <div class="mb-3">
          <label for="listTitle" class="form-label">Title</label>
          <input onChange={e => setListTitle(e.target.value)} type="text" class="form-control" id="listTitle" />
        </div>
        <div class="mb-3">
          <label for="listTitle" class="form-label">Title</label>
          <input onChange={e => setListTitle(e.target.value)} type="text" class="form-control" id="listTitle" />
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default ListPage
