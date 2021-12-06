import React from 'react'
import propsTypes from 'propsTypes'

export const profile = (props) => {
    const handleName =() => alert (`this is ${props.FullName}`)
    console.log(props)
    return (
        <div>
            {props.children}
          <h1>{props.FullName}</h1> 
          <h1>{props.Bio}</h1>  
          <h1>{props.Profission}</h1>  

        </div>
    )
}
Profile.defaultProps={
    FullName: "FullName"
}
Profile.propTypes = {
    FullName: propTypes.string

}
