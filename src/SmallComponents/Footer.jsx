import {
  Grid,
  Typography,
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import { logo } from "../images";
import {
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa"; // Corrected import for icons

const Footer = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        backgroundColor: "#23003C",
        padding: 4,
        color: "white",
      }}
      justifyContent="center"
    >
      {/* First Grid Item - Logo and Text */}
      <Grid item xs={12} md={6}>
        <Grid container alignItems="center">
          {/* Logo */}
          <Grid item>
            <img
              src={logo}
              alt="Market Machina Logo"
              style={{ width: "40px", marginRight: "10px" }}
            />
          </Grid>
          {/* Text */}
          <Grid item>
            <Typography variant="h6" component="span">
              Market Machina
            </Typography>
          </Grid>
        </Grid>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{ color: "#808080", marginTop: 1, width: "50%" }}
        >
          Example description: Market Machina is a decentralized ecosystem
          offering a range of financial tools and governance capabilities to
          empower users.
        </Typography>

        {/* Social Media Icons */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item>
            <IconButton
              href="https://github.com/your-repo-link"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <FaGithub />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://t.me/your-telegram-link"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <FaTelegramPlane />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://www.instagram.com/your-profile"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <FaInstagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://discord.com/invite/your-discord-link"
              target="_blank"
              sx={{ color: "#fff" }}
            >
              <FaDiscord />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      {/* Second Grid Item - All Lists and Input Box in One */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={4} direction="row">
          {/* Lists and Email Input in One Grid Item */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* List 1 */}
            <Box sx={{ flex: 1, minWidth: "200px" }}>
              <Typography variant="h6" gutterBottom>
                platform
              </Typography>
              <List sx={{ color: "white" }}>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Feature" />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Staking" />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="tokenomics" />
                </ListItem>
              </List>
            </Box>

            {/* List 2 */}
            <Box sx={{ flex: 1, minWidth: "200px" }}>
              <Typography variant="h6" gutterBottom>
                Resources
              </Typography>
              <List sx={{ color: "white" }}>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Documentation " />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Whitepaper" />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Api" />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Statistics" />
                </ListItem>
              </List>
            </Box>

            {/* List 3 */}
            <Box sx={{ flex: 1, minWidth: "200px" }}>
              <Typography variant="h6" gutterBottom>
                Community
              </Typography>
              <List sx={{ color: "white" }}>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Discord" />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Governance" />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                  <ListItemText primary="Support" />
                </ListItem>
              </List>
            </Box>

            {/* Email Input Section */}
            <Box sx={{ flex: 1, minWidth: "200px" }}>
              <Typography variant="h6" gutterBottom>
                Stay Updated
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#808080", marginBottom: 2 }}
              >
                Subscribe to our newsletter for the latest updates and insights.
              </Typography>
              <Box component="form">
                <TextField
                  label="Enter your email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    marginBottom: 2,
                    "& .MuiInputLabel-root": {
                      color: "#fff", // White label color
                    },
                    "& .MuiInputBase-input": {
                      color: "#fff", // White text color
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#fff", // White border
                      },
                      "&:hover fieldset": {
                        borderColor: "#fff", // White border on hover
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Divider */}
      <Grid item xs={12} sx={{ marginTop: 4 }}>
        <Divider sx={{ backgroundColor: "white" }} />
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 2,
          color: "#808080",
        }}
      >
        <Box>
          <Typography variant="body2">
            © 2025 Market Machina. All rights reserved.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            variant="body2"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Terms of Service
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;
