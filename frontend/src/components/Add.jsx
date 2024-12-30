import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [input, Setinput] = useState({ Name: "", Age: "", Department: "", Salary: "" })
  const navigate = useNavigate()
  var location = useLocation()
  console.log("loc", location.state)

  const inputHandler = (e) => {
    // console.log(e.target.value)
    Setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3004/update/" + location.state.val._id, input)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
        })

    }
    else {
      axios.post("http://localhost:3004/add", input)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
        }).catch((error) => {
          console.log(error)
        })
    }
  }
  useEffect(() => {
    if (location.state !== null) {
      Setinput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Department: location.state.val.Department,
        Salary: location.state.val.Salary
      })
    }
  }, [])


  return (
    <div>
      <br /><br /><br /><br />
      <Typography variant="h6" component="div">DETAILS</Typography>
      <TextField label="Name" variant='filled' name='Name' value={input.Name} onChange={inputHandler}></TextField><br /><br />
      <TextField label="Age" variant='filled' name='Age' value={input.Age} onChange={inputHandler}></TextField><br /><br />
      <TextField label="Department" variant='filled' name='Department' value={input.Department} onChange={inputHandler}></TextField><br /><br />
      <TextField label="Salary" variant='filled' name='Salary' value={input.Salary} onChange={inputHandler}></TextField><br /><br />
      <Button variant='contained' onClick={addHandler}>SUBMIT</Button>
    </div>
  )
}

export default Add
