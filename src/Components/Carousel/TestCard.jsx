/* eslint-disable react/prop-types */
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import "./TestCard.css"

export default function TestCard({ link, image, name, description }) {
  return (
      <Card sx={{ width: 345,height: 450, background: "#1E1E1E", margin: "0 auto", borderRadius: "15px" }} back>
        <CardMedia
          sx={{ height: 190, objectFit: "cover" }}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="#929292" height={120} overflow={"auto"}>
          {description}
          </Typography>
        <CardActions sx={{marginTop: "15px", padding: 0}}>
          <Link size="small" href={link}><GitHubIcon/></Link>
          <Link size="small" href={link}><LinkIcon/></Link>
        </CardActions>
        </CardContent>
      </Card>
  );
}