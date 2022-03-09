import React from 'react'
import { Box ,Typography } from '@material-ui/core'
import Greetings from './Greetings'

const Welcome = (props) => {

    return (
        <Box>
        {/* {props.userEmail.email && <p>Welcome {props.userEmail.email}</p>} */}
            <Typography>Email - {props.email}</Typography>
            <Typography>Password - {props.password}</Typography>
            <Greetings greet="Hello"/>
            <Greetings greet="Hi"/>
       </Box>
    )
}

export default Welcome;