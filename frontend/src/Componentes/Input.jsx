import { styled } from "@mui/material/styles";

const StyledInput = styled('input')(({ theme }) => ({
  width: 200,
  backgroundColor: '#fff',
  color: '#000',

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: '#000',
    color: '#fff',
  }),
}));

function Input({ placeholder, value, onChange }) {

  return (
    <input
      style={{ 
        borderRadius: '20px',  // o '2rem', '999px'
        padding: '5px 20px',
        border: '2px solid black', 

      }} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

}

export default Input;
