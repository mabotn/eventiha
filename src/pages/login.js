import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

import UserServices from '../services/users'

import useStyles from '../styles.js'
import Logo from '../assets/logo.png'

const Login = () => {
    const styles = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [failed, setFailed] = useState(false)

    const emailChanged = (e) => { setEmail(e.target.value) }
    const passwordChanged = (e) => { setPassword(e.target.value) }

    const login = (e) => {
        e.preventDefault()

        UserServices.Login(email, password).then((response) => {
            if (response.data.length === 0) {
                setFailed(true)
            } else {
                const user = response.data[0]
                localStorage.setItem('eventiha.userId', user.id)
                localStorage.setItem('eventiha.userFirstname', user.firstname)
                localStorage.setItem('eventiha.userLastname', user.lastname)
                localStorage.setItem('eventiha.userEmail', user.email)
                window.location.reload()
            }
        })
    }

    return <Container component="main" maxWidth="xs">
        <div className={styles.authPaper}>
            <img className={styles.authLogo} src={Logo} alt='Eventiha' />

            <form className={styles.authForm} noValidate onSubmit={login}>
                <TextField
                    value={email}
                    onChange={emailChanged}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                />

                <TextField
                    value={password}
                    onChange={passwordChanged}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password" />

                <Button
                    size="large"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.authButton}>
                    Sign In
                    </Button>

                {failed && <Typography className={styles.error}>
                    Incorrect username or password, try again!
                </Typography>}

                <Link to="/signup" className={styles.authLink}>
                    <Typography>Don't have an account? Sign Up</Typography>
                </Link>
            </form>
        </div>
    </Container>
}

export default Login
