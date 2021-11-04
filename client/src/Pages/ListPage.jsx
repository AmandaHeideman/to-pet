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

  const handleOnDelete = (id) => {
    console.log(id)
    url.post('/delete', {
      id: id
    })
      .then(window.location.reload())
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    url.post('/', {
      title: listTitle,
      listItem: listItem
    })
      .then(window.location.reload())
  }


  return (
    <div className="container">
      <h1> All your Todo lists :) </h1>
      <ul className="list-group">
        {lists ? (
          lists.map((value, key) => {
            return <>
              <li className="list-group-item">
                <Link style={{ textDecoration: 'none' }} to={`/${value._id}`} props={value}>
                  {value.listTitle}
                </Link>
                <input className="m-2 btn btn-outline-danger cursor-pointer" value="X" onClick={() => handleOnDelete(value._id)} type="button" />
              </li>
            </>
          })

        ) :
          <h1>Loading...</h1>
        }</ul>

      <form class="mt-4" method="POST" onSubmit={handleOnSubmit}>
        <div class="mb-3">
          <label for="listTitle" className="form-label">Create a new list</label>
          <input onChange={e => setListTitle(e.target.value)} type="text" class="form-control" id="listTitle" />
        </div>
        {/*  <div class="mb-3">
          <label for="listItem" className="form-label">First item</label>
          <input onChange={e => setListItem(e.target.value)} type="text" class="form-control" id="listItem" />
        </div> */}


        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default ListPage
