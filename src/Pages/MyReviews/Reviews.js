import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Root/Context/AuthProvider';

const Reviews = ({review}) => {
    // const [displayReivew, setDisplayReview] = useState(review);
    const {user} = useContext(AuthContext)
    const location = useLocation
   const handleDelete = (review) =>{
    fetch(`http://localhost:5000/my-reviews/${review._id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            if (data.deletedCount > 0) {
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Review has been deleted!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });

                  location.reload();
            }
        });

   }

    return (
        <>
            <tr>
                <td>
                    {user?.displayName}
                </td>
                <td>
                    <Link >
                        <button className="btn btn-ghost btn-xs">Update</button>
                    </Link>
                </td>
                <th>
                    <button onClick={() => handleDelete(review)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
        </>
    );
};

export default Reviews;