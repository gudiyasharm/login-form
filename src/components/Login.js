import React, { useState } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import Welcome from './Welcome'

const Login = (props) => {
    const paperStyle = { padding: 20, height: '50vh', width: 280, margin: "40px auto" }
    const btnstyle = { margin: '10px 0' }
    
    const [showUsername, setShowUsername] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [allData, setAllData] = useState([]);

    const [disable, setDisable] = useState(true);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setDisable(false)
    }

    const submitForm = (e) => {
        console.log(e)
        // const newData = { email: email};
        // setAllData([...allData, newData]);
        e.preventDefault();
        setShowUsername(true);
        setShowWelcomeMessage(true);
        // props.updateUserEmail({email});
    };


    return (
        <div>
            {showWelcomeMessage === false ? 
                <div>
                <Paper elevation={10} style={paperStyle}>
                <form onSubmit={submitForm}>
                    <Grid align='center'>
                        <h1>Login Form</h1>
                    </Grid>

                    {/* <TextField label='username' placeholder='Enter username' fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> */}

                    <TextField label='username' placeholder='Enter username' fullWidth
                        value={email}
                        onChange={handleEmail}
                    />

                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
                        disabled={!email}>Submit</Button>

                    </form>
                </Paper>
            </div> :
            <div>
                <Welcome email={email} password={password}/>
                {/* {showUsername === true && <p>Welcome {email}</p>} */}
            </div>}
        </div>  
    )
}

export default Login;