import React, { Component } from 'react'
// import { Grid, Paper } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import EmailerAction from '../../Actions/EmailerAction'
import { Grid, Paper } from '@mui/material'
import styles from './EmailForm.module.css'

class EmailForm extends Component {
  state = {
    username: '',
    phoneNumber: '',
    email: '',
    message: '',
    hidden: '',
  }

  _onSubmit = (e) => {
    e.preventDefault()

    // console.log(this.props)
    if (this.state.hidden.trim() !== '') {
      console.log('Submission Failed')

      return
    } else {
      this.props.emailer(this.state)
      this.setState({ username: '', phoneNumber: '', email: '', message: '' })
    }
  }
  _onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }
  render() {
    // console.log(this.props)
    // console.log(this.state)
    return (
      <Grid>
        <div className={styles.contactInfoHolder}>
          <Paper className={styles.contactWrapper} elevation="12">
            <form className={styles.contactForm} onSubmit={this._onSubmit}>
              <h2 className={styles.contactDesign}>Contact Me</h2>
              <div className={styles.formGroup}>
                <label htmlFor="username">Name:</label>
                <input
                  onChange={this._onChange}
                  id="username"
                  name="username"
                  value={this.state.username}
                  // onChange={handleNameChange}
                  // onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">Phone:</label>
                <input
                  onChange={this._onChange}
                  id="phoneNumber"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  // onChange={handlePhoneChange}
                  // onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  onChange={this._onChange}
                  id="email"
                  name="email"
                  value={this.state.email}
                  // onChange={handleEmailChange}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  onChange={this._onChange}
                  id="message"
                  name="message"
                  value={this.state.message}
                  // onChange={handleMessageChange}
                  // onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="hiddenInput"></label>
                <input
                  type="hidden"
                  onChange={this._onChange}
                  id="hiddenInput"
                  name="hiddenInput"
                  value={this.state.hidden}
                  // onChange={handleMessageChange}
                  // onChange={(e) => setMessage(e.target.value)}
                ></input>
              </div>
              <button type="submit">Send</button>
            </form>
          </Paper>
        </div>
      </Grid>
    )
  }
}

export default EmailForm
