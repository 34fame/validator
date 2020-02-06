import React from 'react'
import { Box, List, ListItem, Typography } from '@material-ui/core'

const ExampleHeader = ({ title, content }) => {
   return (
      <Box>
         <Box>
            <Typography variant="body1">{title}</Typography>
         </Box>
         <Box>
            <List>
               {content.map((item, idx) => (
                  <ListItem key={idx}>
                     <Typography variant="body2">{item}</Typography>
                  </ListItem>
               ))}
            </List>
         </Box>
      </Box>
   )
}

export default ExampleHeader
