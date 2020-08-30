import React from 'react';
import  { useState } from 'react';
import './Course.css'
import SingleCourse from '../SingleCourse/SingleCourse';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseData from'./CourseData';
import Cart from './Cart';

const Course = () => { 
     const first12 = CourseData.slice(0,12);
     const [courses, ] = useState(first12);
     const [cart, setCart] = useState([]);
     
     const handleAddSingleCourse = (courses) => {
         const newCart = [...cart, courses];
         setCart(newCart);
        }

    return (
        <div className="course-container">
            <div className="courses-container">
                {
                    courses.map(course => <SingleCourse 
                        handleAddSingleCourse ={handleAddSingleCourse}
                        course={course}
                        ></SingleCourse>)
                }
            
            </div>

            <div className="cart-container">   
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;