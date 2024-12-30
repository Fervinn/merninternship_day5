import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {

    const [user, setuser] = useState([])
    var navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((response) => {
                setuser(response.data)
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    const delvalue = (id) => {
        console.log(id);
        axios.delete("http://localhost:3004/remove/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
            .catch((error) => console.log(error))
    }

    const updatevalue = (val) => {
        navigate("/add",{state:{val}})
    }

    return (
        <div>
            <br /><br /><br /><br />
            <TableContainer component={Paper}>
                <Table border='2'>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">NAME <br /></TableCell>
                            <TableCell align="center">AGE <br /></TableCell>
                            <TableCell align="center">DEPARTMENT <br /></TableCell>
                            <TableCell align="center">SALARY <br /></TableCell>
                            <TableCell align="center">DELETE <br /><br /></TableCell>
                            <TableCell align="center">UPDATE <br /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow key={val._id}>
                                    <TableCell>{val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Department}</TableCell>
                                    <TableCell>{val.Salary}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="error" onClick={() => { delvalue(val._id) }}>Delete</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="error" onClick={() => { updatevalue(val) }}>Update</Button>
                                    </TableCell>
                                </TableRow>
                            )

                        })}

                    </TableBody>
                </Table>

            </TableContainer>
        </div>
    )
}

export default View
