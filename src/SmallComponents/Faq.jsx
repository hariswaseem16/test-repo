import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // "+" icon
import RemoveIcon from "@mui/icons-material/Remove"; // "-" icon

const faqData = [
  {
    question: "What is Market Machina?",
    answer: `Market Machina is a decentralized ecosystem designed to provide users with a variety of tools for financial growth and governance within the blockchain space. 
            The project focuses on enhancing transparency, security, and user participation. The core value lies in empowering users to engage in a decentralized, transparent, and rewarding ecosystem.`,
  },
  {
    question: "Why should I buy and hold $MACHINA tokens?",
    answer: `The $MACHINA token serves as the primary utility token within the Market Machina ecosystem. By holding the token, users can participate in governance (veMACHINA), stake their tokens to earn rewards, and use them to access exclusive features. Staking the token can unlock additional benefits and voting power.`,
  },
  {
    question: "How can I participate in the $MACHINA token presale?",
    answer: `To participate in the $MACHINA token presale, follow these steps:
      1. Visit the presale page on the official Market Machina website.
      2. Connect your wallet.
      3. Choose the amount of $MACHINA tokens you wish to purchase.
      4. Confirm your transaction using supported payment methods (such as ETH, USDT, or credit card).
      5. Complete the transaction before the presale ends (refer to the important dates on the website).`,
  },
  {
    question: "What benefits do I get by joining the presale?",
    answer: `Joining the presale provides you with early access to the $MACHINA token at a discounted rate. As an early contributor, you’ll also have the opportunity to access exclusive services and benefits before they become available to the public.`,
  },
  {
    question: "How does staking work, and what rewards can I earn?",
    answer: `Staking $MACHINA tokens allows users to participate in securing the network and earn rewards over time. Rewards are distributed based on the amount and duration of tokens staked. Additionally, staking grants governance power, giving users voting rights on critical decisions made by the Market Machina DAO.`,
  },
  {
    question: "What exclusive services do $MACHINA token holders unlock?",
    answer: `Holding $MACHINA tokens grants users access to exclusive services such as premium tools, higher staking rewards, governance participation (via veMACHINA), and early access to new features and updates within the ecosystem.`,
  },
  {
    question: "How does Market Machina ensure transparency and trust?",
    answer: `Market Machina ensures transparency and trust by conducting regular smart contract audits, maintaining an open-source codebase, and providing a comprehensive knowledge base. Additionally, governance decisions are made through the decentralized autonomous organization (DAO) structure, where veMACHINA token holders have a direct say in key decisions.`,
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        backgroundColor: "#23003C",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom align="center" color="white">
          Frequently Asked Questions
        </Typography>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              backgroundColor: "transparent", // Set transparent background
              boxShadow: "none", // Remove box-shadow for transparency
              borderBottom: "1px solid white", // Ensure divider stays white
              marginBottom: 2, // Add space between questions
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index}` ? (
                  <RemoveIcon sx={{ color: "white" }} /> // "-" icon when expanded
                ) : (
                  <AddIcon sx={{ color: "white" }} /> // "+" icon when collapsed
                )
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: "transparent", // Make background transparent
                color: "white", // Make text white
              }}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "transparent", // Transparent background
              }}
            >
              <Typography variant="body1" sx={{ color: "#808080" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
            {/* Divider that stays white, regardless of open/close */}
            <Divider sx={{ backgroundColor: "white" }} />
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
};

export default Faq;
