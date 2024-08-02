import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, Grid } from "@mui/material";
import { contactData } from "../data";
import { deepOrange } from "@mui/material/colors";
import { MinWidth } from "./Form";

export default function MediaCard() {
  return (
    <Grid container  rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '22px'}}>
      {contactData.map((data) => {
        return (
          <Grid item key={data.id}>
            <Card sx={{ maxWidth: MinWidth }}>
              <CardHeader
                // sx={{ height: 140 }}
                title={data.name}
                subheader={data.role}
                avatar={
                  <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                    {data.name?.substring(0,2) || 'A'}
                  </Avatar>
                }
              />
              <CardContent>
                <Typography gutterBottom  component="div">
                  <b>Created Date</b> : {data.formatedDateTime || 'No Date'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
