import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";
function Linkedin() {
  const theme = useTheme();
  return (
    <div>
      <LinkedInIcon sx={{ fontSize: 47, color: theme.palette.common.white }} />
    </div>
  );
}

export default Linkedin;
