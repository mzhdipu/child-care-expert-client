import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Root/Context/AuthProvider';

const UpdateReview = () => {
    const {user} = useContext(AuthContext)
    const {update} = useLoaderData
    const [updateReview, setUpdateReview] = useState({});


    const handleAddReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
  
        const updateReview = {
          review
        }
  
        fetch(`http://localhost:5000/update/${review._id}`, {
                  method: 'PUT',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(updateReview)
              })
              .then(res => res.json())
              .then(data => {
                  if (data.modifiedCount > 0){
                      alert('user updated')
                      console.log(data);
                  }
  
                  const newUpdateReviews = [...updateReview, data];
                  setUpdateReview(newUpdateReviews);
  
              })
        
          .catch(error => {
            console.log(error)
            }) 
  
      }


    return (
        <div>
           <form onSubmit={handleAddReview} className="card flex-shrink-0 w-3/5 m-auto my-8 shadow-2xl bg-base-100">
              <div className="card-body">

                <div className="form-control">
                  <input type="text" placeholder="Name" name="name" disabled defaultValue={user?.displayName} className="input input-bordered" />
                </div>

                <div className="form-control">
                  <input type="email" placeholder="email" name="email" disabled defaultValue={user?.email} className="input input-bordered" />
                </div>

                <div className="form-control">
                  <textarea className="textarea textarea-bordered input input-bordered" name="review" defaultValue={""} placeholder="review"></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update</button>
                </div>

              </div>
            </form>
        </div>
    );
};

export default UpdateReview;