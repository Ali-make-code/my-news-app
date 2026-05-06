import React, { Component } from 'react'
import logo from '../images/logo.png';

export default class navbar extends Component {
   state = {
    query: ""
  }

  render() {
    return (
<nav className="navbar navbar-dark navbar-expand-sm bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src={logo} alt="logo" className='rounded-pill' style={{width: "80px", height: "50px" }} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav  mx-auto gap-4 ">
            <li className="nav-item link" >
                <a className="nav-link link" href="/">Foryou</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link" href="/">Following</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link" href="/">spports</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link" href="/">Local</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link" href="/">Bussiness</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link" href="/">Entertainment</a>
            </li>
        </ul>
      <form className="d-flex ms-auto">
        <input 
          className="form-control me-3" 
          type="text" 
          placeholder="Search..."
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <button 
          className="btn btn-primary" 
          type="button"
          onClick={() => {
            if (this.state.query.trim() !== "") {
              window.open(`https://www.google.com/search?q=${this.state.query}`, "_blank");
            }
          }}
        >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
    )
  }
}
