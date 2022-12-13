import { useState } from "react";

import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const TooltipMsg = ({children, open, setOpen, title }) => {
  const onHandleTooltipClose = () => {
		setOpen(false);
	};

  return (
		<ClickAwayListener onClickAway={onHandleTooltipClose}>
			<Tooltip
				open={open}
				onClose={onHandleTooltipClose}
				disableFocusListener
				disableHoverListener
				disableTouchListener
				title={title}
			>
        {children}
			</Tooltip>
		</ClickAwayListener>
	);
};

export default TooltipMsg;
