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

const Example5 = () => {
   const init = {
      contains: '',
      in: '',
      matches: '',
      whitelist: '',
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
                           title="Example4"
                           content={[
                              'Contains: (1) Contains the string "chicken" (case-sensitive)',
                              'In: (1) Value must be one of "apple", "banana", "pear"',
                              'Matches: (1) Values must match the provides regex pattern',
                              'Whitelist: (1) Characters must be in provided whitelist',
                           ]}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Contains"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('contains') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('contains', {
                              contains: 'chicken',
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="In"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('in') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('in', {
                              isRequired: true,
                              isIn: 'applebananapear',
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Regex Pattern"
                           placeholder="^[a-z]{1}[0-9]{2}-[a-zA-Z]{3}$"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('regex') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('regex', {
                              isRequired: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Matches"
                           placeholder="a99-aaa"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('match') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('match', {
                              matches: values.regex,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Whitelisted Characters"
                           placeholder="!@#$%"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('whitelisted') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('whitelisted', {
                              isRequired: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Whitelist Match"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('whitelist') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('whitelist', {
                              isRequired: true,
                              isWhitelisted: values.whitelisted,
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

export default Example5
