/* eslint-disable react/prop-types */
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import "./CardCarrousel.css"

export default function CardCarrousel({ link,github, image, name, description }) {
  return (
      <Card className="CardCarrousel"  back>
        <CardMedia
          sx={{ height: 190, objectFit: "cover" }}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="#929292" height={120} overflow={"auto"} className='description'>
          {description}
          </Typography>
        <CardActions sx={{marginTop: "15px", padding: 0}}>
          {github ? <Link size="small" target="_blank" className='iconCard' href={github}><GitHubIcon className='iconSvg'/></Link>: ""}
          {link ? <Link size="small" target="_blank" className='iconCard' href={link}><LinkIcon className='iconSvg'/></Link>: ""}
        </CardActions>
        </CardContent>
      </Card>
  );
}