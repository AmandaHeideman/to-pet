import React, { useState, useEffect } from "react";
import axios from "axios";

const url = axios.create({
  baseURL: process.env.API_KEY || "http://localhost:5000",
});

const EditListPage = (props) => {
  const id = props.match.params.id;
  const [lists, setLists] = useState([]);

  function getList() {
    url
      .get(`/${id}`)
      .then((response) => {
        setLists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getList();
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let newItemsArray = [];

    for (let i = 0; i < e.target.length; i++) {
      newItemsArray.push(e.target[i].value);
    }
    newItemsArray.pop();

    url
      .post(`/${id}/edit`, {
        listItems: newItemsArray,
      })
      .then(window.location.replace(`/${id}`));
  };

  return (
    <div className="container">
      <h1>{lists.listTitle}</h1>
      <form method="POST" onSubmit={handleOnSubmit}>
        <div className="list-group list-unstyled">
          {lists.listItem
            ? lists.listItem.map((item) => {
              return (
                <div className=" mb-3">
                  <input
                    classname="form-control"
                    defaultValue={item}
                    placeholder={item}
                  />
                </div>
              );
            })
            : "no items"}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditListPage;
