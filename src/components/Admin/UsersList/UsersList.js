import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EditIcon from "@mui/icons-material/Edit";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({ data, title }) {
  const [dense, setDense] = React.useState(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        overflowY: "hidden",
        marginBottom: "25px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mb: 2 }} variant="h6" component="div">
            {title}
          </Typography>
          <Demo>
            <List
              dense={dense}
              sx={{ height: 160, overflowY: "scroll" }}
              className="gifts-list-box"
            >
              {data &&
                data.map((row) => (
                  <ListItem
                    key={row.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      {row?.role && (
                        <Avatar
                          sx={{ backgroundColor: "var(--theme-primary)" }}
                        >
                          {row?.firstName?.["0"].toUpperCase()}
                        </Avatar>
                      )}

                      {row?.name && <CardGiftcardIcon />}
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        row?.name || row?.firstName + " " + row?.lastName
                      }
                      secondary={row?.points}
                    />
                  </ListItem>
                ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
