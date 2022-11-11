import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Root/Context/AuthProvider';

const UpdateReview = () => {
    const {user} = useContext(AuthContext)
    const {update} = useLoaderData
    return (
        <div>
           <form className="card flex-shrink-0 w-3/5 m-auto my-8 shadow-2xl bg-base-100">
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