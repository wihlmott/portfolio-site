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
  console.log(data);

  const openSite = () =>
    data.website ? window.open(`https://${data.website}`) : "";
  const openGitHub = () => (data.code ? window.open(`${data.code}`) : "");

  return (
    <div>
      <Card sx={{ height: "380px", width: 270, mx: 2, mb: 1 }}>
        <CardContent>
          <Typography sx={{ fontWeight: "bold", mt: -1, mb: 0.4 }}>
            {data.title}
          </Typography>
          <CardMedia
            sx={{
              height: "200px",
              boxShadow: "1px -1px 10px -4px rgba(0,0,0,0.75) inset",
            }}
            image={data.picture}
          />
          <Typography variant="subtitle2">Description:</Typography>
          <Typography
            variant="body1"
            sx={{ height: "65px", overflow: "scroll" }}
          >
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
    </div>
  );
};

export default ProjectCard;
