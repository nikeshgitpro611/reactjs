import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DefaultImage from "../../../src/assets/react.svg";
import ImageCard from "../ImageCard";

export default function MultiActionAreaCard({ getData }) {
  const { cards } = getData;
  const [cardData, setCardData] = React.useState([]);

  React.useEffect(() => {
    if (cards && cards.length > 0) {
      const processedCards = cards.map((data) => {
        const imageCard =
          data.card.card?.gridElements?.infoWithStyle?.info || [];
        const imageIds = imageCard.map(
          (image) =>
            `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${image.imageId}`
        );
        if (imageIds.length > 0) {
          console.log("imageIds : ", imageIds[0]);
        }

        // Ensure at least one image URL
        const imageUrls = imageIds.length > 0 ? imageIds : [DefaultImage];

        return {
          title: data.card.card.title,
          type: data.card.card?.id,
          citySlug: data.card.card?.citySlug,
          Location: `${data.card.card?.lat} and ${data.card.card?.lng}`,
          brands:
            data.card.card?.brands?.length > 0
              ? data.card.card.brands[0].text
              : "Explore Restaurants Near You",
          metaInfo: data.card.card?.metaInfo?.pageMetaDescription,
          images: imageUrls,
        };
      });

      setCardData(processedCards);
    }
  }, [cards]);

  // console.log(cardData);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
      {cardData.length > 0 ? (
        cardData.map((card, index) => (
          <Card sx={{ maxWidth: 345, marginBottom: 2 }} key={index}>
            <CardActionArea>
              {/* Display each image in the card */}
              {card.images.length > 0 &&
                card.images.map((image, imgIndex) => (
                  <CardMedia
                    key={imgIndex}
                    component="img"
                    height="140"
                    image={image}
                    alt={`${card.title || "Image"} - ${imgIndex}`}
                  />
                ))}
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#000000",
                    fontSize: "1.3rem",
                    fontWeight: "700",
                  }}
                >
                  Popular: {card.type || "Testing"}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#c71212", fontSize: "1rem" }}
                >
                  CityData: {card.citySlug || "CityData"}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#5e13a0", fontSize: "0.9rem" }}
                >
                  {card.title || "Testing"}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#5e13a0", fontSize: "0.9rem" }}
                >
                  Location: {card.Location || "Location"}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#5e13a0", fontSize: "0.9rem" }}
                >
                  Brands: {card.brands}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.metaInfo || "No additional information available."}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={DefaultImage} // Use a default image if no cards are available
              alt="Default"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Default Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                No cards available. Please try again later.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
