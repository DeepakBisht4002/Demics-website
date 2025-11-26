import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MuiAccordian({ question, answer, id }) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{
        color: "#fff",
        borderBottom: "1px solid #fff",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls={`panel-${id}-content`}
        id={`panel-${id}-header`}
        sx={{
          backgroundColor: "#262626",
          color: "#fff",
        }}
      >
        <Typography component="span">{question}</Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ backgroundColor: "#262626", color: "#fff" }}>
        {answer}
      </AccordionDetails>
    </Accordion>
  );
}
