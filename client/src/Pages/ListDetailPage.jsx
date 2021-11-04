import React, { useState, useEffect } from 'react';
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
      <ul>
        {lists.listItem ? (
          lists.listItem.map((item, key) => {
            return <li>{item}  <input value="DONE" onClick={() => handleOnDelete(key)} type="button" className="py-2 px-3 bg-green-400 text-white rounded-md cursor-pointer" /></li>
          })) : "no items"}
      </ul>

      <form method="POST" onSubmit={handleOnSubmit}>
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
