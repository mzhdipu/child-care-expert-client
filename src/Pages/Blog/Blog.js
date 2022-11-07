import React from 'react';

const Blog = () => {
    return (
        <section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
<div className='w-2/3 m-auto'>
            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box"> 
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
                
            </div>

            <div tabIndex={1} className="collapse border border-base-300 bg-base-100 rounded-box"> 
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={1} attribute is necessary to make the div focusable</p>
                </div>
                
            </div>
        </div>
        </section>
    );
};

export default Blog;