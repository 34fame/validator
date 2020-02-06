# @34fame/validator

> Form field validation library for React

[![NPM](https://img.shields.io/npm/v/@34fame/validator.svg)](https://www.npmjs.com/package/@34fame/validator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`validator` is a simple to use yet very powerful field validation library for React. Inspired by the efforts of [Dana Janoskova](https://github.com/DJanoskova) and her _How I tried to validate React forms (with hook)_ [article](https://itnext.io/how-i-tried-to-validate-react-forms-with-hooks-31634fc5385b).

## Install

```bash
npm install --save @34fame/validator
```

```bash
yarn add @34fame/validator
```

## Usage

```jsx
import React from 'react'
import useForm from '@34fame/validator'

const App = () => {
   const { values, setValues, useInput, isValid } = useForm(init)

   const handleOnSubmit = e => {
      e.preventDefault()
      console.log(values)
   }

   return (
      <React.Fragment>
         <form onSubmit={() => handleOnSubmit()}>
            Username:<br>
            <input
               type="text"
               {...useInput('username', {
                  isRequired: true,
                  isLength: {
                     min: 3
                  },
                  isAlphanumeric: {
                     locale: ['en-US']
                  }
               })}
            />
            <br>
            Password:<br>
            <input
               type="password"
               {...useInput('password', {
                  isRequired: true,
                  isLength: {
                     min: 8,
                     max: 20
                  }
               })}
            />
            <br>
            Verify Password:<br>
            <input
               type="password"
               {...useInput('verify', {
                  isRequired: true,
                  equals: values.password
               })}
            />
            <input disabled={!isValid} type="submit" value="Submit">
         </form>
      </React.Fragment>
   )
}

export default App
```

## Credits

[validatorjs/validator.js](https://github.com/validatorjs/validator.js)

[DJanoskova/React-validator-demo](https://github.com/DJanoskova/React-validator-demo)

## License

MIT © [34 Fame, LLC](https://github.com/tmoreland)
