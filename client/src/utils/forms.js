/**
 
Form Validator

---
param formData must be an object
error messages are not required, a default message
will be shown if not specified

---
Function returns an object with 3 items:
- errors [] -> Array of errors caught by the functino
- success {} -> Object of validated items only
- isValidated BOOL -> check if the form is validated or not

---
formData Example

const formData = validateForm({

  formInput1 : {
    value : e.target[0].value,
    required : true,
    requiredErrorMsg : 'Post must have URL slug',
    allowedChars : /^[a-zA-Z0-9_-]*$/,
    allowedCharsErrorMsg : 'Only numbers, letters dashes and underscores are allowed'
  },
  
  formInput2 : {
    ...
  }
})

*/

export function validateForm(formData) {

  if (typeof formData !== 'object') return 'formData must be type object'

  let errors = []
  let success = {}
  let isValidated = false
  
  for (const inputTitle in formData) {

    let fieldIsValid = true
    const field = formData[inputTitle]

    // Check if field is required
    if(field.required && !field.value) {
      field.requiredErrorMsg = field.requiredErrorMsg || 'This field is required'
      errors.push({ input : inputTitle, message : field.requiredErrorMsg })
      fieldIsValid = false
    } 

    // Check for allowed characters
    if(field.allowedChars && !field.allowedChars.test(field.value) ) {
      field.allowedCharsErrorMsg = field.allowedCharsErrorMsg || 'This field has characters that aren\'t allowed'
      errors.push({ input : inputTitle, message : field.allowedCharsErrorMsg })
      fieldIsValid = false
    }

    // Check if date

    if( fieldIsValid ) success[inputTitle] = field.value

  }

  if(errors.length === 0) isValidated = true

  return { errors, success, isValidated }
}