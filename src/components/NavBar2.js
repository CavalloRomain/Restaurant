import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon';
/*import FastfoodIcon from '@material-ui/icons/Fastfood';
                        <Icon className="fa Fastfood" color="primary" />*/

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Table des réstaurants React tableau avec Matérial Table            


                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;