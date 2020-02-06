import React from 'react'
import { Box, Container } from '@material-ui/core'

import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'
import Example4 from './Example4'
import Example5 from './Example5'

const Template = () => {
   return (
      <Box mx={4}>
         <Container maxWidth="md">
            <Box>
               <Example1 />
            </Box>
            <Box>
               <Example2 />
            </Box>
            <Box>
               <Example3 />
            </Box>
            <Box>
               <Example4 />
            </Box>
            <Box>
               <Example5 />
            </Box>
         </Container>
      </Box>
   )
}

export default Template
