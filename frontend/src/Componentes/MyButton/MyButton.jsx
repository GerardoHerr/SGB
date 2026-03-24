import Button from "@mui/material/Button";

function MyButton({ children, onClick }) {

  return (
    <Button  style={{ backgroundColor: '#2c3033', color: 'white' }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );

}

export default MyButton;