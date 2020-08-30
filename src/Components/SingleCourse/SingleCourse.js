import React from 'react';
import './SingleCourse.css';

const SingleCourse = (props) => {
    const { img, courseName, price} = props.product;

    return (
        <div className="course">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="course-name">{courseName}</h4>
                <p>$ {price}</p>
                <br /> 
                <button className="enroll-button"
                        onClick={() => props.handleAddSingleCourse(props.product)}> Enroll Now</button>
            </div>
        </div>
    );
};

export default SingleCourse;