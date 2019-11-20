import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FileIcon from '@material-ui/icons/Description';
import { Divider } from '@material-ui/core';
import {  ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import {  MenuItem} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import ViewIcon from '@material-ui/icons/VisibilityOutlined';
import FileViewer from 'react-file-viewer';
// import sampledocx from '../../assets/SampleSpec.docx';
// import natureiamge from '../../assets/nature.jpg';
// import samplepdf from '../../assets/Stats.pdf';
import samplecsv from '../../assets/sample.csv';
// import webm from '../../assets/small.webm';
import Modal from '@material-ui/core/Modal';


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
      papermodal: {
        position: 'relative',
        width: theme.spacing(120),
        height: theme.spacing(80),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        outline: 'none',
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },     
      cardContent: {
        flexGrow: 1,
      },
      contextmenu : {
        backgroundColor: theme.palette.background.paper,
        boxShadow : theme.shadows[3]
      },
})

class Shared extends React.Component{
  constructor(){
    super();
    this.state ={
      open:false,    

  };
}
  
  handleOpenFile = () => {
    this.setState({open: true});
  }

  handleCloseFile = () => {
    this.setState({open: false});
  }
 
  handleClickAway = () => {
    this.setState({ open: false });  
  };

    render(){
        const cards1 = [1, 2, 3, 4, 5,6, 7];
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
                <ContextMenuTrigger id="some_unique_identifier">
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                      <FileIcon style={{fontSize:100}} color="primary" />
                    </CardMedia>
                    
                    <CardContent className={classes.cardContent}>
                      <Typography  variant="h6" component="h2">
                        File
                      </Typography>
                    
                    </CardContent>
                  </Card>
                </ContextMenuTrigger>  
              </Grid>
            ))}
          </Grid>
          <ContextMenu id="some_unique_identifier" className={classes.contextmenu} >
            
          <MenuItem 
                      className={classes.Container}
                      onClick={this.handleOpenFile}
                  > 
                              {<ViewIcon color="action" style={{marginRight:'15px'}} />} View
                  </MenuItem>
                  <MenuItem > {<DeleteIcon color="action" style={{marginRight:'15px'}}/>} Delete</MenuItem>
                  
             
          </ContextMenu>
          <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.open}
                            onClose={this.handleCloseFile}
                            onClickAway={this.handleClickAway}
                            className={classes.modal}
                            >
                            <div  className={classes.papermodal}>
                              <FileViewer
                              fileType='csv'
                              filePath={samplecsv}
                              />
                                
                            </div>
            </Modal>
        </Container>
        </Grid>

);       
}
}

export default withStyles(styles) (Shared);