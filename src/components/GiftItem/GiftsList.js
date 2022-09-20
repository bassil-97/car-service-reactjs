import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Chip from "@mui/material/Chip";

import LoadingSpinner from "../../UI/LoadingSpinner";

export default function GiftsList({ gifts, isLoading }) {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        maxHeight: 200,
        overflowY: "auto",
      }}
      className="gifts-list-box"
    >
      <nav>
        <List>
          {isLoading && (
            <div className="center">
              <LoadingSpinner />
            </div>
          )}
          {gifts.length && !isLoading > 0 ? (
            gifts.map((gift, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CardGiftcardIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={gift.name}
                    secondary={`${gift.points} points`}
                  />
                  <Chip label="claim it within 10 days" />
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <ListItem>
              {!isLoading && <ListItemText primary="Nothing to show" />}
            </ListItem>
          )}
        </List>
      </nav>
    </Box>
  );
}
