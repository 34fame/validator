import React from 'react'
import useForm from '@34fame/validator'
import {
   Box,
   Button,
   Container,
   InputAdornment,
   Paper,
   TextField,
} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import ExampleHeader from './ExampleHeader'

const Example2 = () => {
   const init = {
      username: '',
      password: '',
      verifyPassword: undefined,
   }
   const { values, setValues, useInput, isValid, errors } = useForm(init)

   const handleOnSubmit = () => {
      console.log(values)
      setValues(init)
   }

   return (
      <Box m={4}>
         <Container maxWidth="md">
            <Box mx={2}>
               <Paper>
                  <Box p={3}>
                     <Box>
                        <ExampleHeader
                           title="Example2"
                           content={[
                              'Username: (1) Required, (2) Minimum of 6 characters, (3) Alphanumeric',
                              'Password: (1) Required, (2) Minimum of 6 characters',
                              'Verify Password: (1) Must equal Password',
                           ]}
                        />
                     </Box>
                     <Box>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Username"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('username') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('username', {
                              isRequired: true,
                              isLength: {
                                 min: 6,
                                 max: undefined,
                              },
                              isAlphanumeric: {
                                 locale: ['en-US'],
                              },
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Password"
                           type="password"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('password') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('password', {
                              isRequired: true,
                              isLength: {
                                 min: 6,
                                 max: undefined,
                              },
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Verify Password"
                           type="password"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes(
                                 'verifyPassword'
                              ) && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('verifyPassword', {
                              isRequired: true,
                              equals: values.password,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <Button
                           color="secondary"
                           disabled={!isValid}
                           variant="contained"
                           onClick={() => handleOnSubmit()}
                        >
                           Submit
                        </Button>
                     </Box>
                  </Box>
               </Paper>
            </Box>
         </Container>
      </Box>
   )
}

export default Example2
