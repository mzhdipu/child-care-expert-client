import React from 'react';

const Reviews = ({review}) => {
    // const {_id, name, review} = review
    return (
        <>
            <tr>
                <td>
                    {review.name}
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs">Update</button>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
        </>
    );
};

export default Reviews;