import styled from "@emotion/styled";
import { ButtonUnstyled } from "@mui/base";
import { Box } from "@mui/system";
import React from "react";

const StyledButton = styled(ButtonUnstyled)({
  alignItems: "center",
  backgroundColor: "transparent",
  border: "1px solid #fefefe",
  boxSizing: "border-box",
  color: "#fefefe",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: "Inter,sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  height: "48px",
  justifyContent: "center",
  letterSpacing: "2px",
  lineHeight: "24px",
  minWidth: "100px",
  outline: "0",
  padding: "0 17px",
  textAlign: "center",
  textDecoration: "none",
  transition: "all .3s",
  userSelect: "none",
  webkitUserSelect: "none",
  touchAction: "manipulation",

  "&:hover": {
    borderColor: "#DF3C3C",
    color: "#DF3C3C",
  },
});

export default function AboutButton(props) {
  const { children, onClick, rest } = props;

  return (
    <Box onClick={onClick}>
      <StyledButton {...rest}>{children}</StyledButton>
    </Box>
  );
}
