import React from 'react'
import {Grid} from '@material-ui/core'

import Details from './components/details/Details'
import Main from './components/main/Main'
import useStyles from './components/details/styles.js'




const App = () => {
   const classs=useStyles()
    return (
        <div>
            <Grid className={classs.Grid} container spaceing={0} alignItems="left" justify="center" style={{height:'100vh'}}>
               <Grid item xs={12} sm={4}>
                  <Details title="income" />
               </Grid>
               <Grid item xs={12} sm={3}>
                  <Main />
               </Grid>
               <Grid item xs={12} sm={4}>
                  <Details title="expanse" />
               </Grid>
            </Grid>
        </div>
    )
}

export default App

