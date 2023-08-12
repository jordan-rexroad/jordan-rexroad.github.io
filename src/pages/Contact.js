import { useState, React, e } from 'react' 



const Form = () => {
  const [data, setData] = useState({ name: "", email:"", phone:"", message:""})
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({...data, [name]: value})
  }


  const handleSubmit = (e) => { 
    e.preventDefault()
    alert(JSON.stringify(data))

}
  return ( 
    <div className ="container2">
    <form className='form' method="post" onSubmit={handleSubmit}>

        <h1>Contact <span>Here</span></h1> 
          <div className = 'name'>
            <input className = "firstName"  type="text" name="name" cols="30" onChange={handleChange} value={data.name} rows="10" placeholder='Enter name'/>
          </div>

          <div className = 'email'>
            <input className = "Email" type="email" name="email" cols= "30" onChange={handleChange} value={data.email} rows="10" placeholder='Example@gmail.com'/>
          </div>

          <div className = "phone">
            <input className = "Phone" type="phone" name="phone" cols= "30" onChange={handleChange} value={data.phone} rows="10"  placeholder='Enter Phone number'/>
          </div>

          <div className = "message">
            <textarea className = "Message" name="message" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder='Type message here...'/>
          </div>
        <button type="submit"className="submit-button">submit</button>
    </form>
   </div>
  )
}


export default Form