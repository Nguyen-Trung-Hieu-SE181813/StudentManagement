import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { Send } from "@mui/icons-material";

function ContactPage() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", padding: 4 }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "100%",
          maxWidth: 600,
          borderRadius: 3,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: 3, fontWeight: "bold", color: "#3f51b5" }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ marginBottom: 3, color: "#757575" }}
        >
          We'd love to hear from you! Fill out the form below to get in touch.
        </Typography>

        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                placeholder="Your Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                placeholder="Your Email Address"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                placeholder="Subject"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                placeholder="Your Message"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginTop: 3 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#3f51b5",
                ":hover": { backgroundColor: "#303f9f" },
              }}
              endIcon={<Send />}
            >
              Send Message
            </Button>
          </Box>
        </form>

        <Box
          sx={{
            marginTop: 4,
            textAlign: "center",
            color: "#757575",
            fontSize: 14,
          }}
        >
          <Typography>
            You can also email us at{" "}
            <a
              href="mailto:contact@yourwebsite.com"
              style={{ color: "#3f51b5", textDecoration: "none" }}
            >
              contact@fpt.edu.vn
            </a>
          </Typography>
          <Typography>
            Or call us at{" "}
            <a
              href="tel:+123456789"
              style={{ color: "#3f51b5", textDecoration: "none" }}
            >
              1900 1801
            </a>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

export default ContactPage;
