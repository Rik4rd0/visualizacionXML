import React from "react";
import { Typography, Container } from "@mui/material";

function Footer() {
  return (
    <footer className="mt-20 py-4 bg-gray-200">
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          {'© '}
          Avance Jurídico {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;