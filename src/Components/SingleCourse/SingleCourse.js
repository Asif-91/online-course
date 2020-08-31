import React from 'react';
import './SingleCourse.css';

const SingleCourse = (props) => {
    const { image, body, title, price} = props.course;
    console.log(props.course)

    return (
        <div className="course">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className="course-name">{title}</h4>
                <h6>{body}</h6>
                <p>Course Amount: {price}</p>
                <br /> 
                <button className="enroll-button"
                        onClick={() => props.handleAddSingleCourse(props.course)}> Enroll Now</button>
            </div>
        </div>
    );
};

export default SingleCourse;