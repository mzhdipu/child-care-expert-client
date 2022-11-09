import React from 'react';

const AddServices = () => {
    const handleAddService = (event) =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
      
        const addService = {
          title,
          img,
          description
        }

        console.log(addService)
      
        fetch(`http://localhost:5000/services`,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(addService)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
        
            // apply condition with toast
          })
        
          .catch(error => {
             console.log(error)
            }) 
      
      }

    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Add New Service</h2>
                </div>

                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">

                    <div className="mt-6 overflow-hidden bg-white rounded-xl">
                        <div className="px-6 py-12 sm:p-12">

                            <form onSubmit= {handleAddService} method="POST" className="mt-14 text-left">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900"> Service Title </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="title" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-base font-medium text-gray-900"> Image </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="img" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label for="" className="text-base font-medium text-gray-900"> Description </label>
                                        <div className="mt-2.5 relative">
                                            <textarea name="description" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4"></textarea>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Add Service
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AddServices;