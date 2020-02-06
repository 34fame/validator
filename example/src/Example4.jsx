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
      alpha: '',
      boolean: '',
      email: '',
      hexColor: '',
      int: '',
      ipAddress: '',
      json: '',
      length: '',
      lowerCase: '',
      macAddress: '',
      mobile: '',
      port: '',
      postalCode: '',
      url: '',
      upperCase: '',
      uuid: '',
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
                              'Alpha: (1) Required, (2) Contains only alpha characters',
                              'Boolean: (1) Boolean (string)',
                              'Color: (1) Valid hex color',
                              'Email Address: (1) Email Address',
                              'Integer: (1) Integer (string)',
                              'IP Address: (1) Valid IPv4 or IPv6 IP address',
                              'JSON: (1) Required, (2) Valid JSON',
                              'Length Between: (1) Minimum of 3 characters, (2) Maximum of 10 characters',
                              'Lowercase: (1) Required, (2) Contains only lower case letters',
                              'MAC Address: (1) Contains a valid MAC address',
                              'Phone Number: (1) Country prefix (eg +1) (2) Valid phone number',
                              'Postal Code: (1) Valid US postal code',
                              'URL: (1) Valid URL',
                           ]}
                        />
                     </Box>
                     <Box>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Alpha"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('alpha') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('alpha', {
                              isRequired: true,
                              isAlpha: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Boolean"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('boolean') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('boolean', {
                              isBoolean: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Color (hex)"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('hex') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('hex', {
                              isHexColor: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Email Address"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('email') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('email', {
                              isEmail: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Integer"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('int') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('int', {
                              isInt: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="IP Address"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('ip') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('ip', {
                              isIP: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="JSON"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('json') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('json', {
                              isJSON: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Length Between"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('length') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('length', {
                              isLength: {
                                 min: 3,
                                 max: 10,
                              },
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Lowercase"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('lowercase') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('lowercase', {
                              isRequired: true,
                              isLowercase: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="MAC Address"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('mac') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('mac', {
                              isMACAddress: true,
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Phone Number"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('phone') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('phone', {
                              isMobilePhone: {
                                 locale: 'en-US',
                                 options: {
                                    strictMode: true,
                                 },
                              },
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="Postal Code"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('postal') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('postal', {
                              isPostalCode: {
                                 locale: ['US'],
                              },
                           })}
                        />
                     </Box>
                     <Box mt={3}>
                        <TextField
                           color="primary"
                           fullWidth
                           label="URL"
                           variant="outlined"
                           InputProps={{
                              endAdornment: !errors.includes('url') && (
                                 <InputAdornment>
                                    <CheckCircleIcon color="secondary" />
                                 </InputAdornment>
                              ),
                           }}
                           {...useInput('url', {
                              isURL: {
                                 options: {
                                    protocols: ['https'],
                                    require_protocol: true,
                                 },
                              },
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
