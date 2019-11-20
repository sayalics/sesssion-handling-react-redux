import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/Description';
import { Divider } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import {  ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import {  MenuItem} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import ViewIcon from '@material-ui/icons/VisibilityOutlined';
import FileViewer from 'react-file-viewer';
// import sampledocx from '../../assets/SampleSpec.docx';
// import natureiamge from '../../assets/nature.jpg';
import samplepdf from '../../assets/Stats.pdf';
// import samplecsv from '../../assets/sample.csv';
// import webm from '../../assets/small.webm';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Moment from 'moment'

// import FileBrowser, {Icons} from 'react-keyed-file-browser'


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
      content: {
        paddingTop:'10px',
        marginLeft:240,  
        height: '100%'
      },
      container:{
        width: '600px',
        height: '400px',
        margin:" 300 ",

      },
      toolbar: theme.mixins.toolbar,
      
})

class MyDrive extends React.Component{
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
        const cards = [1, 2, 3, 4, 5,6,7,8];
        const cards1 = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15];
        const { classes } = this.props;


        return(
        <Grid direction="column">

        <Container className={classes.cardGrid} maxWidth="100%" >
          <Typography variant='h5'> My Drive </Typography>
          <Divider style={{marginBottom:'2%'}} />
          <Typography variant="h6" color="textPrimary">Folders</Typography>
          {/* End hero unit */}

          <Grid container spacing={5} direction="row" >
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3} lg={2}>
                <ContextMenuTrigger id="some_unique_identifier">
                  <Card className={classes.card} >
                    <CardMedia className={classes.cardMedia}>
                      <FolderIcon style={{fontSize:100}} color="primary" />
                    </CardMedia>
                    
                    <CardContent className={classes.cardContent}>
                      <Typography  variant="h6" component="h2">
                        Folder
                      </Typography>
                      
                    </CardContent>
                     
                  </Card>
                </ContextMenuTrigger>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="100%" >
          <Typography variant="h6" color="textPrimary">Files</Typography>
          {/* End hero unit */}
          <Grid container spacing={5} direction="row" >
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
                              fileType='pdf'
                              filePath={samplepdf}
                              />
                                
                            </div>
              </Modal>
        </Container>
        
        </Grid>

);       
}
}

export default withStyles(styles) (MyDrive);