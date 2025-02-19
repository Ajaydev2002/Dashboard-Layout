import React, { useState } from "react";
import { IconButton, Button, Popper, Paper, Box } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";

const WidgetPopper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget); 
    setOpen(!open);
  };

  return (
    <Box>
      <IconButton sx={{ marginRight: 1 }} onClick={handleClick}>
        <Button>
          <WidgetsIcon />
        </Button>
      </IconButton>

      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <Paper sx={{ padding: 2, boxShadow: 3, bgcolor: "background.paper" }}>
          <Box> This is the Widgets Component Content</Box>
        </Paper>
      </Popper>
    </Box>
  );
};

export default WidgetPopper;
