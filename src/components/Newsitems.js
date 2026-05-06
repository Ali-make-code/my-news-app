import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title,description,imageUrl}=this.props;
    return (
      <div>
        <div className="card card mt-2">
                <img src={!imageUrl?"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-dark">see more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitems