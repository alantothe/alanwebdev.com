import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { useTheme } from "@mui/material/styles";

function Resume() {
  const theme = useTheme();
  return (
    <div>
      <PictureAsPdfOutlinedIcon
        sx={{ fontSize: 45, color: theme.palette.common.white }}
      />
    </div>
  );
}

export default Resume;
