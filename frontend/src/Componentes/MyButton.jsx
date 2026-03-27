import Button from "@mui/material/Button";


function MyButton({ children, onClick }) {

  return (
    <Button
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );

}

export default MyButton;