import {
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { eth, logo, usdt } from "../images";

const BuyCard = () => {
  return (
    <Box
      sx={{
        py: 3,
        px: 3,
        borderRadius: "20px",
        border: "2px solid red",
        maxWidth: "450px",
        bgcolor: "#290040",
        width: "100%", // Ensures the card width adjusts on smaller screens
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
          Machina Presale
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
          Stage 5 / 14
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ mt: 3, fontSize: { xs: "14px", sm: "16px" } }}>
          Total USD Raised
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography
            sx={{ fontSize: { xs: "18px", sm: "30px" }, fontWeight: "bold" }}
          >
            $1,678,192
          </Typography>
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>
            / $1,150,000
          </span>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
            1 MACHINA{" "}
            <span
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              $0.0001
            </span>
          </Typography>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
            Next Stage{" "}
            <span
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "5px",
                padding: "3px",
              }}
            >
              $0.001
            </span>
          </Typography>
        </Box>
        <Box>
          <LinearProgress
            sx={{
              mt: 1,
              height: "10px", // Adjust the height of the progress bar
              bgcolor: "#E0E0E0", // Light gray background for the progress bar track
              "& .MuiLinearProgress-bar": {
                bgcolor: "#E600D6", // Green color for the progress
              },
            }}
            variant="determinate"
            value={70} // Set the progress value (0-100)
          />
          <Typography
            sx={{
              mt: 1,
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Buy Machina before price increases by 14.29%
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            mt: 5,
            flexDirection: { xs: "column", sm: "row" }, // Stack buttons on smaller screens
            gap: { xs: "10px", sm: "0" }, // Add gap on small screens
          }}
        >
          {/* First Button with Image */}
          <Button
            sx={{
              padding: "10px 20px",
              border: "2px solid #fff",
              bgcolor: "#7B0B9D",
              color: "#fff",
              width: { xs: "100%", sm: "150px" },
              borderRadius: "10px",
            }}
          >
            <img
              src={eth}
              alt="Button Icon"
              style={{ height: "24px", marginRight: "8px" }} // Adjust the size of the image
            />
            ETH
          </Button>

          <Button
            sx={{
              padding: "10px 20px",
              color: "white",
              border: "2px solid #7B0B9D",
              width: { xs: "100%", sm: "150px" },
              mt: { xs: "10px", sm: "0" }, // Add margin-top on mobile
            }}
          >
            <img
              src={usdt}
              alt="Button Icon"
              style={{ height: "24px", marginRight: "8px" }} // Adjust the size of the image
            />
            USDT
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
          <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
            You pay
          </Typography>
          <Box>
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
              Balance: <span style={{ color: "#7B0B9D" }}>8772 ETH </span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            defaultValue="0.72 ETH"
            sx={{
              width: { xs: "100%", sm: "400px" }, // Full width on mobile
              border: "2px solid #7B0B9D",
              mt: 2,
              borderRadius: "10px",

              input: {
                fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for mobile
                color: "#fff",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img
                    src={eth}
                    alt="Logo"
                    style={{ height: "20px", marginLeft: "8px" }} // Adjust logo size and margin
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{ mt: 3, px: 3, fontSize: { xs: "14px", sm: "16px" } }}
          >
            You receive
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              defaultValue="0.72 ETH"
              sx={{
                width: { xs: "100%", sm: "400px" }, // Full width on mobile
                border: "2px solid #7B0B9D",
                mt: 2,
                borderRadius: "10px",

                input: {
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "#fff",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img
                      src={logo}
                      alt="Logo"
                      style={{ height: "20px", marginLeft: "8px" }} // Adjust logo size and margin
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Stack the text and button vertically
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
              textAlign: "center", // Center the text
              mt: 2, // Margin-top for spacing
            }}
          >
            <Typography sx={{ mb: 2, fontSize: { xs: "14px", sm: "16px" } }}>
              Connect your wallet to see your balance
            </Typography>
            <Button
              sx={{
                bgcolor: "#B900E3",
                width: { xs: "100%", sm: "400px" }, // Full width on mobile
                borderRadius: "20px",
                color: "#fff",
                fontSize: { xs: "16px", sm: "20px" }, // Adjust font size for mobile
                padding: "10px 20px", // Adjust padding for button size
              }}
            >
              Connect Wallet
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
              color: "grey",
              fontSize: { xs: "12px", sm: "14px" }, // Adjust font size for mobile
            }}
          >
            <Typography>Don't Know How to Buy?</Typography>
            <Typography>Wallet Won't Connect? </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyCard;
