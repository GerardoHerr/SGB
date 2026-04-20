function Select({ value, onChange, options }) {

  return (

    <select value={value} onChange={onChange}
        style={{ 
        color: 'gray',
        border: '2px solid black', 
        borderRadius: '20px',  // o '2rem', '999px'
        padding: '6px 10px',      
        justifyContent: 'center', // Alineación horizontal
        alignItems: 'center',     // Alineación vertical
        width: '76%'             // Ajusta según necesites
      }} 
    >

      <option value="">Seleccione</option>

      {options.map((op) => (
        <option key={op} value={op}>
          {op}
        </option>
      ))}

    </select>

  );

}

export default Select;