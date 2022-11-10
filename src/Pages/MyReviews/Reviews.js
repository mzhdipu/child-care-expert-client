import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reviews = ({review}) => {
    const [displayReivew, setDisplayReview] = useState(review);

   const handleDelete = (review) =>{
    fetch(`http://localhost:5000//my-reviews/${review._id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if (data.deletedCount > 0) {
                alert('User deleted successfully.');
                const remainingUsers = displayReivew
                    .filter(usr => usr._id !== review._id);
                    setDisplayReview(remainingUsers);
            }
        });
   }
    
    return (
        <>
            <tr>
                <td>
                    {review.name}
                </td>
                <td>
                    <Link onClick={() => handleDelete(review)}>
                        <button className="btn btn-ghost btn-xs">Update</button>
                    </Link>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
        </>
    );
};

export default Reviews;