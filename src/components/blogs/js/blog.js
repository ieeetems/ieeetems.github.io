import React,{useState} from 'react'
import B1 from "../b1.jpg";
import B2 from "../b2.jpg";
import "../css/blog.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Model from '../../model';
const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
  });
function Blog() {
    const [show,setShow]=useState(false);
    const classes = useStyles();
    const handleShow=()=>{
        setShow(!show);
    }
    return (
        <div className="blog" id="blog">
            <h2 className="blog-title">Blogs</h2>
            <div className="blogcards">
            <Card className={classes.root} onClick={()=>{setShow(!show)}}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Eveloution of social media"
                height="150"
                image={B1}
                title="Eveloution of social media"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Evolution Of Social Media
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                They say that necessity is the mother of invention and the man’s need for
connecting with...
                </Typography>
                <br/>
                <Button variant="contained"  onClick={()=>setShow(!show)} >
                     Open
                </Button>
                </CardContent>
            </CardActionArea>
            </Card>
            
            {show ? <Model onClose={handleShow} /> :null}
            </div>
        </div>
    )
}

export default Blog
