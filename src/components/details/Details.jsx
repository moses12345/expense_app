import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2'

import useStyles from './styles.js'

const Details=({title})=>{
    const classs=useStyles()
    return(
        <Card className={title==='income'?classs.income:classs.expanse}>
           <CardHeader title={title} />
           <CardContent>
             <Typography variant="h5">$50</Typography>
             
             
           </CardContent>
        </Card>
    )
}
export default Details
