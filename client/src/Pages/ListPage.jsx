import React from 'react';
import { Link } from 'react-router-dom';

const ListPage = () => {
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
