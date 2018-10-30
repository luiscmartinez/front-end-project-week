import React, { Component } from 'react'
// import { Field, reduxForm } from 'redux-form'
// import { connect } from 'react-redux'
// import { postNote } from '../actions'

class NewNote extends Component {
  constructor (props) {
    super(props)
    console.log('in cons')
  }

  // renderField = (field) => {
  //   const { touched, error } = field.meta
  //   const className = `form-group ${touched && error ? 'has-danger' : ''}`
  //   return (
  //     <div className={className}>
  //       <input
  //         className='form-control'
  //         type={field.type}
  //         placeholder={field.placeholder}
  //         {...field.input}
  //       />
  //       <div className='text-help' style={{ color: 'red' }}>
  //         {touched ? error : ''}
  //       </div>
  //     </div>
  //   )
  // }

  // renderArea = (field) => {
  //   return <textarea className='noteBody' {...field.input} />
  // }

  // handlePost = (values) => {
  //   console.log(values)
  //   const token = localStorage.getItem('token')
  //   this.props.postNote(values, token, () => {
  //     this.props.history.push('/')
  //   })
  // }

  // onSubmit = (values) => {
  //   this.handlePost(values)
  // }

  render () {
    console.log('in construc')
    // const { handleSubmit } = this.props
    return (
      <div className='newNote-container'>
        {/* <Markdown>#Create New Note:</Markdown>
        <form
          className='newNote-form'
          type='submit'
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <Field
            name='title'
            type='text'
            placeholder='Add Title'
            component={this.renderField}
          />
          <Field name='tags' placeholder='add #' component={this.renderField} />

          <Field name='context' component={this.renderArea} />

          <button className='save-Btn'>Save</button>
        </form> */}
        hello
      </div>
    )
  }
}

// export default reduxForm({
//   // validate,
//   form: 'newNoteForm'
// })(connect(null, { postNote })(NewNote))
export default NewNote
