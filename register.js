import React from 'react'
import axios from 'axios'
import swal from 'sweetalert'

class register extends React.Component{
constructor(){
    super()
    this.state={
        name : '',
        email : '',
        password : '',
    }
}

handleChange = (e) =>{
    this.setState({ [e.target.name] : e.target.value })
} 

handleSubmit = async(e) => {
    e.preventDefault()
    console.log(this.state)
    await axios.post("http://127.0.0.1:8000/api/register", this.state).then((res)=> {
        alert("Tes :s"+res.data.message)
    })
    //this.props.history.push('/login');
    swal("Good job!", "You have successfully added new user!", "success");
}
render(){
    return(
        <div>
            <h5>Register User</h5>
            <hr/>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label for="name">Nama</label>
                <input type="text" className="form-control" name="name" placeholder="Enter Your Name" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="text" className="form-control" name="email" placeholder="Enter Your Email" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Enter Your Password" onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
}

export default register;