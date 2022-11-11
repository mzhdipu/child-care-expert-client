import React, { useContext, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../Root/Context/AuthProvider';
import ServiceReview from './ServiceReview';

const ServicesReviews = () => {
    const [addReviews, setAddreviews] = useState({});
    const {user} = useContext(AuthContext)

const handleAddReview = (event) =>{
  event.preventDefault();
  const form = event.target;
  const review = form.review.value;
  
  const addReviews = {
    review
  }


  fetch(`http://localhost:5000/my-reviews`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addReviews)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
  
      if(data.acknowledged){
          swal("Review Add Succefully");
          event.target.reset();
      }

      const newReviews = [...addReviews, data];
      setAddreviews(newReviews);
      
    })
  
    .catch(error => {
       console.log(error)
      }) 

}
    return (
        <div>
            <form onSubmit={handleAddReview} className="card flex-shrink-0 w-full bg-base-100">
                <div className="card-body">

                  <div className="form-control">
                    <input type="text" placeholder="Name" name='name' disabled defaultValue={user?.displayName} className="input input-bordered" />
                  </div>

                  <div className="form-control">
                    <input type="email" placeholder="email" name='email' disabled defaultValue={user?.email} className="input input-bordered" />
                  </div>
                
                <div className="form-control">
                    <textarea name="review" className='textarea textarea-bordered input input-bordered' id="" cols="60" rows="10"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Review</button>
                </div>

                </div>
            </form>

            <ServiceReview addReviews={addReviews}></ServiceReview>
           

        </div>
    );
};

export default ServicesReviews;