import React from 'react'
import { Box, Typography } from '@material-ui/core'

const Greetings = (props) => {
    return(
    <Box>
        <Typography>{props.greet}</Typography>
    </Box>
    )
}

export default Greetings;