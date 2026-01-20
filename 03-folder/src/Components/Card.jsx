import React from 'react'

const Card = (props) => {

    console.log(props.user)
  return (
    <div>
        <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.Age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat laboriosam necessitatibus temporibus itaque cumque reiciendis ipsa maxime quas, harum sit?</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
