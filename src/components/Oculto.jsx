import React from 'react'
import {withWidth, Typography, Hidden, Button} from '@material-ui/core'

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h5" color="initial">
                Ancho: {props.width}
            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  xs
                </Button>
            </Hidden>
            <Hidden smDown>
                <Button variant="contained" color="primary">
                  sm
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(Oculto)
