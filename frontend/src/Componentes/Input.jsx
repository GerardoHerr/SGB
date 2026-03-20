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
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

}

export default Input;
