import { Box, Typography } from "@mui/material";
import { chart, polygon } from "../images"; // Ensure images are correctly imported

const content = [
  {
    img: polygon,
    heading: "ML- and AI-Based Insights",
    description:
      "Access machine learning models and GenAI tools that deliver real-time, actionable market signals for informed decision-making",
  },
  {
    img: polygon,
    heading: "All-in-One Ecosystem",
    description:
      "Seamlessly integrate automated trading strategies, decentralized investment solutions, and professional analytics in one unified platform",
  },
  {
    img: polygon,
    heading: "Community-Driven Governance",
    description:
      "Join a secure, collaborative ecosystem where token holders shape the platform’s future through shared contributions and influence",
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
    heading: "Transparency and Trust",
    description:
      "Built on tamper-proof, open smart contracts, Market Machina ensures complete protection for users against manipulation or hidden risks",
  },
];

const leftNewContent = [
  {
    img: polygon,
    heading: "Automated quantitative trading strategies",
  },
  {
    img: polygon,
    heading: "AI-driven insight agents",
  },
  {
    img: polygon,
    heading: "ML-based systems for broad pattern recognition",
  },
  {
    img: polygon,
    heading: "Professional manual analytics",
  },
];

const rightNewContent = [
  {
    img: polygon,
    heading: "Decentralized PAAM Accounts",
    description:
      "Transparent, rules-based investment pools for capital management",
  },
  {
    img: polygon,
    heading: "Investment (DAO)",
    description: "Community-governed investment pool with voting rights",
  },
  {
    img: polygon,
    heading: "Decentralized Exchange (DEX) Executor",
    description: "Automated trading through decentralized liquidity platforms",
  },
];

const Ecosystem = () => {
  return (
    <Box
      sx={{
        bgcolor: "#23003C",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "20px", sm: "50px 0" }, // Responsive padding
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: "40px", sm: "60px" },
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
          mb: 5,
        }}
      >
        Ecosystem
      </Typography>

      {/* Centered Image */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <img
          src={chart}
          style={{ width: "100%", maxWidth: "700px", height: "auto" }} // Responsive image
        />
      </Box>

      {/* Grid of Boxes - Original 6 Boxes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, // One column for small screens, 3 for larger screens
          rowGap: 10,
          columnGap: 4,
          width: "80%",
          mt: 10,
        }}
      >
        {content.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              backgroundColor: "#3C0066",
              border: "2px solid #fff",
              borderRadius: "10px",
              padding: "50px 20px 20px",
              textAlign: "left", // Align text to the left
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Align content to the left
              justifyContent: "center",
              minHeight: "220px",
            }}
          >
            {/* Image inside the box, aligned to left */}
            <img
              src={item.img}
              style={{
                width: "120px",
                objectFit: "cover",
                marginBottom: "20px", // Ensuring space between the image and text
                alignSelf: "start", // Align image to the start (left)
              }}
            />

            {/* Centered Heading, but aligned left */}
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "18px", sm: "22px" },
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {item.heading}
            </Typography>

            {/* Centered Description, but aligned left */}
            <Typography
              sx={{
                color: "#A8A5BB",
                fontSize: { xs: "14px", sm: "16px" },
                width: "85%",
                marginTop: "10px",
                textAlign: "left", // Align description to the left
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Services and Solutions Title */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "30px", sm: "40px" },
          fontWeight: "bold",
          mt: 15,
          color: "#fff",
        }}
      >
        Services and Solutions
      </Typography>

      {/* New Section with 4 Left Boxes & 3 Right Boxes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // Single column on mobile, two on larger screens
          gap: 6,
          width: "80%",
          mt: 15,
        }}
      >
        {/* Left Column - 4 Boxes with Image & Heading on the same line */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {leftNewContent.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#3C0066",
                border: "2px solid #fff",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "left", // Align text to left
                minHeight: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", // Align content to start (left)
              }}
            >
              {/* Image and Heading on the same line */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  src={item.img}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "bold",
                  }}
                >
                  {item.heading}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Right Column - 3 Boxes with Image, Heading on same line and Description underneath */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {rightNewContent.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                backgroundColor: "#3C0066",
                border: "2px solid #fff",
                borderRadius: "10px",
                padding: "50px 20px 20px",
                textAlign: "left", // Align text to left
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align content to left
                justifyContent: "center",
              }}
            >
              {/* Image and Heading on the same line */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  src={item.img}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: "bold",
                    textAlign: "left", // Align heading to the left
                  }}
                >
                  {item.heading}
                </Typography>
              </Box>

              {/* Description underneath */}
              <Typography
                sx={{
                  color: "#A8A5BB",
                  fontSize: { xs: "14px", sm: "16px" },
                  width: "85%",
                  marginTop: "10px",
                  textAlign: "left", // Align description to the left
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Ecosystem;
