import styled from "@emotion/styled";
import { ButtonUnstyled } from "@mui/base";
import { Box } from "@mui/material";
import React from "react";

// button desing by Joe Bocock.
const StyledButton = styled(ButtonUnstyled)({
  fontSize: "16px",
  fontWeight: "200",
  letterSpacing: "1px",
  padding: "13px 20px 13px",
  outline: "0",
  border: "1px solid #777",
  cursor: "pointer",
  position: "relative",
  backgroundColor: "rgba(0, 0, 0, 0)",
  userselect: "none",
  webkitUserSelect: "none",
  touchAction: "manipulation",
  minWidth: "100%",

  "&:after": {
    content: '""',
    backgroundColor: "#ffe54c",
    width: "100%",
    zIndex: "-1",
    position: "absolute",
    height: "100%",
    top: "7px",
    left: "7px",
    transition: "0.2s",
  },
});
//   @media (min-width: 768px) {
//     .button-52 {
//       padding: 13px 50px 13px;
//     }
//   }

export default function CommentsButton(props) {
  const { children, onClick, rest } = props;

  return (
    <Box onClick={onClick}>
      <StyledButton {...rest}>{children}</StyledButton>
    </Box>
  );
}
