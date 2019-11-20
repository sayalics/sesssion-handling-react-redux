import React, { Children } from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FileIcon from '@material-ui/icons/Description';
import { Divider } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
      },
      
      cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(0),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        boxShadow:'none',
        border: '1px solid',
        borderColor:'#e5e5e5'
      },
     
      cardContent: {
        flexGrow: 1,
      },
})

class Favourite extends React.Component {
    render(){
        const cards1 = [1, 2, 3, 4, 5,6,7,8,9,10];
        const { classes } = this.props;
        return(
        <Grid direction="column">
        <Container className={classes.cardGrid} maxWidth="100%" >
          <Typography variant='h5'> Shared with me </Typography>
          <Divider style={{marginBottom:'2%'}} />
          <Typography variant="h6" color="textPrimary">Files</Typography>
          <Grid container spacing={7} direction="row" >
            {cards1.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3} lg={2}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <FileIcon style={{fontSize:100}} color="primary" />
                  </CardMedia>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography  variant="h6" component="h2">
                      File
                    </Typography>
                   
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Grid>

);       
}
}

export default withStyles(styles) (Favourite);