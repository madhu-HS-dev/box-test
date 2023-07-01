const Box = (props) => {
  //  Write your code here.
  const { text, boxCls } = props;
  return (
    <div className={boxCls}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="main-heading">Boxes</h1>
    <div className="container">
      <Box text="Small" boxCls="container1" />
      <Box text="Medium" boxCls="container2" />
      <Box text="Large" boxCls="container3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
