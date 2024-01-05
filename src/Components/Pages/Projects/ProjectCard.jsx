import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const cardButtonStyles = { textTransform: "lowercase", m: "auto" };

const ProjectCard = ({ data }) => {
  const openSite = () => {
    console.log(data.website);
  };
  const openGitHub = () => {
    console.log(data.code);
  };

  return (
    <Card sx={{ height: "380px", width: "300px", mx: 2 }}>
      <CardContent>
        <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>
        <CardMedia sx={{ height: "200px" }} image={data.picture} />
        <Typography variant="subtitle2">Description:</Typography>
        <Typography variant="body1" sx={{ height: "65px", overflow: "scroll" }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={cardButtonStyles} onClick={openSite}>
          website
        </Button>
        <Button sx={cardButtonStyles} onClick={openGitHub}>
          code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
