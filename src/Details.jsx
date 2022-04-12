import React from 'react'

const Details = (props) => {
     console.log(props);
  return (
    <div>
        <div>
            {props.details.map((elem)=>{
              return(
                <div id="inner_container">
                  <h1>Details</h1> <br />
              <h2> {elem.name} , {elem.age} ,{elem.salary}</h2>
              </div>
              )
            })}
        </div>
    </div>
  )
}

export default Details
