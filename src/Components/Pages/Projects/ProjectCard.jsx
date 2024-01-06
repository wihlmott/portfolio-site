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
  const openSite = () =>
    data.website ? window.open(`https://${data.website}`) : "";
  const openGitHub = () => (data.code ? window.open(`${data.code}`) : "");

  return (
    <div>
      <Card sx={{ height: "380px", width: 270, mx: 2, mb: 1 }}>
        <CardContent>
          <h1
            style={{
              marginTop: "-12px",
              marginBottom: "2px",
              textDecoration: "none",
            }}
          >
            {data.title}
          </h1>
          <CardMedia
            sx={{
              height: "200px",
              boxShadow: "1px -1px 10px -4px rgba(0,0,0,0.75) inset",
            }}
            image={data.picture}
          />
          <h1 style={{ margin: 0, textDecoration: "none", fontSize: "0.9rem" }}>
            Description:
          </h1>
          <p style={{ height: "65px", overflow: "scroll", marginTop: "2px" }}>
            {data.description}
          </p>
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
