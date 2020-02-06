import React from 'react'
import { Box, Container, Paper, Typography } from '@material-ui/core'

const TitlePage = () => {
   return (
      <Box m={4}>
         <Container maxWidth="md">
            <Box mx={2}>
               <Paper>
                  <Box p={4} display="flex" justifyContent="center">
                     <Typography variant="h2">@34Fame/validator</Typography>
                  </Box>
               </Paper>
            </Box>
         </Container>
      </Box>
   )
}

export default TitlePage
