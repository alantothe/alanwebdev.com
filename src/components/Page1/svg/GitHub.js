import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";

function GitHub() {
  const theme = useTheme();

  return (
    <div>
      <GitHubIcon sx={{ fontSize: 45, color: theme.palette.common.white }} />
    </div>
  );
}

export default GitHub;
