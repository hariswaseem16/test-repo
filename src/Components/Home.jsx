import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { bg, logo } from "../images"; // Assuming you have logo image in images folder
import BuyCard from "../SmallComponents/BuyCard";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box sx={{ position: "absolute", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: { xs: "15px", sm: "30px" }, // Responsive padding
              flexDirection: { xs: "column", sm: "row" }, // Stack on small screens
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "50px", marginRight: "16px" }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" color="white">
                  Market
                </Typography>
                <Typography variant="h6" color="white">
                  Machina
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: { xs: "20px", sm: "50px" },
                color: "#fff",
                fontSize: { xs: "18px", sm: "26px" }, // Adjust font size on small screens
                bgcolor: "#310135",
                p: 1,
                borderRadius: "10px",
                flexWrap: "wrap", // Allow text to wrap on small screens
                justifyContent: { xs: "center", sm: "flex-end" }, // Center text on small screens
              }}
            >
              {[
                "Introduction",
                "Presale",
                "Tokenomics",
                "Staking",
                "Roadmap",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    cursor: "pointer",
                    fontSize: { xs: "16px", sm: "22px" }, // Smaller font on mobile
                    marginBottom: { xs: "10px", sm: "0" }, // Space between items on small screens
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* Connect Wallet Button */}
            <Button
              sx={{
                textTransform: "none",
                backgroundImage: "linear-gradient(to right, #BF02E1, #FA03C8)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                marginTop: { xs: "20px", sm: "0" }, // Add margin on mobile
              }}
            >
              Connect Wallet
            </Button>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            pt: 18,
            display: "flex",
            justifyContent: "space-between",
            color: "#fff",
            flexDirection: { xs: "column", sm: "row" }, // Stack on small screens
            gap: { xs: "20px", sm: "0" }, // Add gap between columns on small screens
          }}
        >
          <Grid item xs={12} md={5.8}>
            <Typography
              color="white"
              sx={{
                fontSize: { xs: "30px", sm: "40px" }, // Font size adjusted for small screens
                marginBottom: "16px",
                width: { xs: "100%", sm: "70%" },
                fontWeight: "bold",
              }}
            >
              <strong>We’re not promising yet another </strong>
              <span style={{ color: "#B900E3" }}> revolution</span>
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "16px", sm: "18px" }, fontWeight: "bold" }}
            >
              We’re building{" "}
              <span style={{ color: "#B900E3" }}>
                real technology <br />
              </span>
              that <span style={{ color: "#B900E3" }}>empowers</span> every
              crypto enthusiast to{" "}
              <span style={{ color: "#B900E3" }}>profit</span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "30px" },
                fontWeight: "bold",
                mt: 4,
                width: { xs: "100%", sm: "60%" },
              }}
            >
              <span style={{ color: "#B900E3" }}>Market Machina</span> — created
              by crypto traders, for crypto traders
            </Typography>
            <Typography
              sx={{
                width: { xs: "100%", sm: "50%" },
                mt: 5,
                fontWeight: "bold",
              }}
            >
              Everything we once dreamed of is now within your reach
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.8}>
            <BuyCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
