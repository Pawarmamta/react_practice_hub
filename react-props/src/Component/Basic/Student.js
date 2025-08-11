import React from 'react'
import PropTypes from 'prop-types';
 

const Student = (props) => {
  return (
    <div className='student'>
       name : {props.name} <br/>
       age : {props.age} <br/>
       ispreety : {props.ispreety?"Yes":"No"} <br/>
    </div>
  )
  Student.propTypes={
    name: PropTypes.string,
    age : PropTypes.number,
    ispreety: PropTypes.bool,
  };
}

export default Student
