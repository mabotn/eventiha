import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

import UserServices from '../services/users'

import useStyles from '../styles.js'
import Logo from '../assets/logo.png'

const Login = () => {
    const styles = useStyles()
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const firstnameChanged = (e) => { setFirstname(e.target.value) }
    const lastnameChanged = (e) => { setLastname(e.target.value) }
    const emailChanged = (e) => { setEmail(e.target.value) }
    const passwordChanged = (e) => { setPassword(e.target.value) }

    const signup = (e) => {
        e.preventDefault()

        UserServices.Exist(email).then((response) => {
            if (response.data.length > 0) {
                setError("An account with the same email is existing, try with another!")
            } else {
                UserServices.Signup(firstname, lastname, email, password).then((response) => {
                    const user = response.data
                    localStorage.setItem('eventiha.userId', user.id)
                    localStorage.setItem('eventiha.userFirstname', user.firstname)
                    localStorage.setItem('eventiha.userLastname', user.lastname)
                    localStorage.setItem('eventiha.userEmail', user.email)
                    window.location.reload()
                })
            }
        })
    }

    return <Container component="main" maxWidth="xs">
        <div className={styles.authPaper}>
            <img className={styles.authLogo} src={Logo} alt='Eventiha' />

            <form className={styles.authForm} onSubmit={signup}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            value={firstname}
                            onChange={firstnameChanged}
                            variant="outlined"
                            required
                            fullWidth
                            label="First Name"
                            autoFocus
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            value={lastname}
                            onChange={lastnameChanged}
                            variant="outlined"
                            required
                            fullWidth
                            label="Last Name"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            value={email}
                            onChange={emailChanged}
                            variant="outlined"
                            required
                            fullWidth
                            type="email"
                            label="Email Address"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            value={password}
                            onChange={passwordChanged}
                            variant="outlined"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                        />
                    </Grid>
                </Grid>

                <Button
                    size="large"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.authButton}>
                    Sign Up
                    </Button>

                {error && <Typography className={styles.error}>
                    {error}
                </Typography>}

                <Link to="/login" className={styles.authLink}>
                    <Typography>Already have an account? Sign in</Typography>
                </Link>
            </form>
        </div>
    </Container>
}

export default Login
