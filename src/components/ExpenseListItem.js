import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <li>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>Amount: {amount}</p>
        <p>Created: {createdAt}</p>
        
    </li>
);

export default ExpenseListItem;