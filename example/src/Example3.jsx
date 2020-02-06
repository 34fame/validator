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

const Example3 = () => {
   const init = {
      dateOne: '',
      dateTwo: '',
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
                           title="Example3"
                           content={[
                              'Before Date: (1) Date is RFC 3339 (2) Date is before 2020-01-01',
                              'After Date: (1) Date is RFC 3339 (2) Date is after 2020-01-01',
                              "RFC 3339 date format is YYYY-mm-DD'T'HH:MM:SS.ss'Z'",
                           ]}
                        />
                     </Box>
                     <Box>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Before Date"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('beforeDate') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('beforeDate', {
                              isRFC3339: true,
                              isBefore: '2020-01-01',
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="After Date"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('afterDate') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('afterDate', {
                              isRFC3339: true,
                              isAfter: '2020-01-01',
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

export default Example3
