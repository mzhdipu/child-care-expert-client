import React from 'react';

const Blog = () => {
    return (
        <section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
            <div className='w-2/3 m-auto'>
                <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box"> 
                    <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={0} A SQL Database follows a table like structure which can have an 
                        unlimited number of rows and every data present inside the database 
                        is properly structured with Predefined Schemas, it is basically used 
                        to manipulate Relational Databases Management Systems. <br />
                        "A NoSQL Database is a Distributed Database where the data is very unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited rows but it follows a Standard Schema Definition and can store all sorts of data models with large distributed data in the form of key-value pairs, graph databases, documents or wide-column stores."
                        </p>
                    </div>
                    
                </div>

            <div tabIndex={1} className="collapse border border-base-300 bg-base-100 rounded-box"> 
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={1} In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required. You also should not store sensitive session data in browser storage due to lack of security.</p>
                </div>
            </div>

            <div tabIndex={2} className="collapse border border-base-300 bg-base-100 rounded-box"> 
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={2} NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    </p>
                </div>
            </div>
            
            

            <div tabIndex={3} className="collapse border border-base-300 bg-base-100 rounded-box"> 
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={3} NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                </div>
            </div>

        </div>
    </section>
    );
};

export default Blog;