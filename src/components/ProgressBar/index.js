const ProgressBar = (props) => {
    const { value } = props;
  
    const containerStyles = {
      height: 20,
      width: '60%',
      backgroundColor: "#e0e0de",
      borderRadius: 5,
      margin: "auto",
      align: "center",  
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${value}%`,
      backgroundColor: "#E5383B",
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;