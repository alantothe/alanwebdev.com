import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTheme } from "@mui/material/styles";
function About() {
  const theme = useTheme();
  return (
    <div>
      <AccountCircleIcon
        sx={{ fontSize: 45, color: theme.palette.common.white }}
      />
    </div>
  );
}

export default About;
