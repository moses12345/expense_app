import React from 'react'
import {Card,CardContent,Grid,CardHeader,Typography,Divider} from '@material-ui/core'
import useStyles from './styles.js'

const Main = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense tracker" subheader="powered by speechly"/>
            <CardContent>
               <Typography align="center" variant="h5">Total balance $100</Typography>
               <Typography variant="subtitle1" style={{ lineHeight:'1.5em',marginTop:'20px'}}>
               {/*INGO CARD */}
               try saying:income or Expense
               </Typography>
               <Divider />
               {/*form component */}
            </CardContent>   
            <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                   <Grid item xs={12}>
                       {/*list */}
                   </Grid>
            </Grid>
            </CardContent>
            
        </Card>
    )
}

export default Main
