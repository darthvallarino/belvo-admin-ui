import useDialogs from "./useDialogs";
import { Backdrop, Box, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export const Loader = ({ msg }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <LockOutlinedIcon />
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: (theme) => theme.palette.grey[900],
          fontSize: "18px",
          fontWeight: 500,
          mt: 4,
        }}
      >
        {msg}
      </Typography>
    </Box>
  );
};

const delay = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

export default function useCallApiProcess(
  promisse,
  msg = "En proceso...",
  minTime = 0,
  error = null
) {
  const {
    openModal,
    closeModal,
    alert,
  } = useDialogs();

  const showBackdrop = () =>
    openModal(Backdrop, { children: <Loader msg={msg} /> });

  const callApi = async (...args) => {
    let resp = {};
    try {
      let response;
      showBackdrop();
      if (minTime) {
        const respAll = await Promise.all([promisse(...args), delay(minTime)]);
        if (respAll) {
          response = respAll[0];
        }
      } else {
        response = await promisse(...args);
      }

      if (response.data) {
        resp.data = response.data;
      }

      closeModal();

      if (response.error) {
        alert(
          "Tenemos un error en nuestros servidores, por favor intenta más tarde."
        );
      }
    } catch (e) {
      resp = { error: e };
    }

    return resp;
  };

  return {
    callApi,
  };
}
