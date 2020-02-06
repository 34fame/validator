# @34fame/validator

> Form field validation library for React

[![NPM](https://img.shields.io/npm/v/@34fame/validator.svg)](https://www.npmjs.com/package/@34fame/validator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Downloads][downloads-image]][https://www.npmjs.com/package/@34fame/validator]

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

## Contributors

<a href="https://github.com/34fame/validator/graphs/contributors"></a>

## Credits

[validatorjs/validator.js](https://github.com/validatorjs/validator.js)

[DJanoskova/React-validator-demo](https://github.com/DJanoskova/React-validator-demo)

## License (MIT)

```
Copyright (c) 2020 Troy Moreland <troy@34fame.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[Troy Moreland, Founder of 34 Fame](https://github.com/tmoreland)
