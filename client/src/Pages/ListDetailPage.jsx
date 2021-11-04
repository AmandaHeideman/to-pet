import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = axios.create({
  baseURL: process.env.API_KEY || 'http://localhost:5000'
});



const ListDetailPage = (props) => {
  const id = props.match.params.id;

  const [lists, setLists] = useState([]);
  const [listItem, setListItem] = useState([]);

  function getList() {
    url.get(`/${id}`)
      .then(response => {
        setLists(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    getList();
  }, []);

  const handleOnDelete = (key) => {
    console.log(key)
    url.post(`/${id}/delete`, {
      index: key
    })
      .then(window.location.reload())
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    url.post(`/${id}`, {
      listItem: listItem
    })
      .then(window.location.reload())
  }

  return (
    <div className="container">
      <h1>{lists.listTitle}</h1>
      <ul className="list-group">
        {lists.listItem ? (
          lists.listItem.map((item, key) => {
            return <li className="list-group-item">{item}
              <input className="m-2 btn btn-outline-success cursor-pointer" value="DONE" onClick={() => handleOnDelete(key)}
                type="button" /></li>
          })) : "no items"}
      </ul>
      <Link to={`/${id}/edit`} style={{ textDecoration: 'none' }} className="mt-2 btn btn-primary cursor-pointer">
        Edit list
      </Link>

      <form class="mt-4" method="POST" onSubmit={handleOnSubmit}>
        <div class="mb-3">
          <label for="listItem" class="form-label">Add item</label>
          <input onChange={e => setListItem(e.target.value)} type="text" class="form-control" id="listItem" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>



    </div>
  )
}

export default ListDetailPage
