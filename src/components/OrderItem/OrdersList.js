import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import LoadingSpinner from "../../UI/LoadingSpinner";

export default function OrdersList({ orders, deleteOrder, isLoading }) {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
    >
      <nav>
        <List>
          {isLoading && (
            <div className="center">
              <LoadingSpinner />
            </div>
          )}
          {orders.length && !isLoading > 0 ? (
            orders.map((order) => (
              <ListItem
                key={order._id}
                disablePadding
                secondaryAction={
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteOrder(order._id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LocalCarWashIcon />
                  </ListItemIcon>
                  <ListItemText primary={order.date} secondary={order.time} />
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
