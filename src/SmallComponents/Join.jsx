import { Box, Typography } from "@mui/material";
import { joinbg, polygon } from "../images"; // Ensure these images are properly imported

const content = [
  {
    img: polygon,
    heading: "All-in-One Ecosystem",
    description:
      "Seamlessly integrate automated trading strategies, decentralized investment solutions, and professional analytics in one unified platform",
  },
  {
    img: polygon,
    heading: "Consistent Profitability",
    description:
      "Leverage systems designed to generate reliable returns, whether the market is rising, falling, or stable",
  },
  {
    img: polygon,
    heading: "No Direct Fees",
    description:
      "Enjoy full access to advanced services simply by staking MACHINA tokens—no direct fees involved",
  },
  {
    img: polygon,
    heading: "ML and AI-Based Insights",
    description:
      "Access machine learning models and GenAI tools that deliver real-time, actionable market signals for informed decision-making",
  },
  {
    img: polygon,
    heading: "Community-Driven Governance",
    description:
      "Join a secure, collaborative ecosystem where token holders shape the platform's future through shared contributions and influence",
  },
  {
    img: polygon,
    heading: "Transparency and Trust",
    description:
      "Built on tamper-proof, open smart contracts, Market Machina ensures complete protection for users against manipulation or hidden risks",
  },
];

const bgColors = [
  "#20184F",
  "#390F3C",
  "#330D4F",
  "#380B41",
  "#390F3C",
  "#361239",
];

const Join = () => {
  return (
    <Box
      sx={{
        bgcolor: "#23003C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "20px", sm: "40px" }, // Padding adjusts for mobile screens
        overflowX: "hidden", // Prevent horizontal overflow
      }}
    >
      {/* Title Section */}
      <Box>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            fontSize: { xs: "30px", sm: "40px" }, // Font size adjustment for smaller screens
          }}
        >
          Join us, and let’s shape the future
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            fontSize: { xs: "30px", sm: "40px" },
            mt: 2,
          }}
        >
          of crypto together!
        </Typography>
      </Box>

      {/* Image */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <img
          src={joinbg}
          alt="Logo"
          style={{
            width: "80%",
            maxWidth: "600px", // Adjust image width for smaller screens
            height: "auto", // Maintain image aspect ratio
          }}
        />
      </Box>

      {/* Subtitle */}
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "30px", sm: "40px" },
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Market Machina
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "30px", sm: "40px" },
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          A Transparent, Collaborative, and
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "30px", sm: "40px" },
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Profitable Trading Ecosystem
        </Typography>
      </Box>

      {/* Boxes Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, // Single column on mobile, 2 columns on larger screens
          gap: 4,
          mt: 8,
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Ensure grid doesn't overflow
          maxWidth: "1200px", // Limit the maximum width for larger screens
        }}
      >
        {content.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: bgColors[index % bgColors.length], // Assigning colors from the array
              border: "2px solid #fff",
              borderRadius: "10px",
              padding: 3,
              textAlign: "left",
              width: "100%", // Full width on smaller screens
              maxWidth: "550px", // Maximum width for larger screens
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box", // Prevents overflow by including padding in width calculations
            }}
          >
            {/* Image and Heading in One Line */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                width: "100%",
              }}
            >
              <img
                src={item.img}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  marginRight: "15px",
                }}
              />
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "bold",
                }}
              >
                {item.heading}
              </Typography>
            </Box>

            {/* Description Below */}
            <Typography
              sx={{
                color: "#A8A5BB",
                fontSize: { xs: "14px", sm: "16px" },
                px: 5,
                textAlign: "center", // Center description text for better appearance
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Join;
