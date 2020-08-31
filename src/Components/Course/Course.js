import React from 'react';
import  { useState } from 'react';
import './Course.css'
import SingleCourse from '../SingleCourse/SingleCourse';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';

const Course = () => { 
     const first12 = fakeData.slice(0,12);
     const [courses, ] = useState(first12);
     const [cart, setCart] = useState([]);

     const handleAddSingleCourse = (courses) => {
         const newCart = [...cart, courses];
         setCart(newCart);
        }

    return (
        <div className="courses-container">
            <div className="course-container">
                {
                    courses.map(courses => <SingleCourse 
                        handleAddSingleCourse ={handleAddSingleCourse}
                        course={courses}></SingleCourse>)
                }
            
            </div>

            <div className="cart-container">   
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;