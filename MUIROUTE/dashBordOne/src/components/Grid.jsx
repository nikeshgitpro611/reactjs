import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, Grid, List, ListSubheader } from "@mui/material";
import { contactData } from "../data";
import { deepOrange } from "@mui/material/colors";
import { MinWidth } from "./Form";

export default function MediaCard() {
  return (
    <Grid container sx={{ width: 900 }} justify="center" spacing={2}>
      {contactData.map((data) => {
        return (
          <Grid
            container
            item
            key={data.id}
            xs={12}
            spacing={3}
            sm={4}
            direction="column"
          >
            <Card sx={{ maxWidth: MinWidth }}>
              <CardHeader
                title={data.name}
                subheader={data.role}
                avatar={
                  <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                    {data.name?.substring(0, 2).toUpperCase() || "A"}
                  </Avatar>
                }
              />
              <CardContent>
                <Typography gutterBottom component="div">
                  <b>Created Date</b> : {data.formatedDateTime || "No Date"}
                </Typography>
                <Typography>
                  <i>Status : </i>
                  {data.preference}
                </Typography>

                <List
                  sx={{ display: "flex" }}
                  subheader={
                    <ListSubheader
                      sx={{
                        display: "flex",
                        color: "green",
                        position: "relative",
                      }}
                    >
                      <b>Skill's -</b>
                      {data.skills.map((skillData, index) => {
                        console.log(data.skills.length);

                        return (
                          <li key={index} style={{ marginLeft: "4px" }}>
                            {skillData}
                            {index < data.skills.length - 1 && ","}
                          </li>
                        );
                      })}
                    </ListSubheader>
                  }
                ></List>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
