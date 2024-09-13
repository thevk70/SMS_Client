function ErrorMsg(props) {
  return (
    <>
      {!props.valid && (
        <span style={{ color: "#d8000c", fontSize: "1rem"}}>
          {props.msg}
          <i className="fa fa-solid fa-regular fa-exclamation "></i>
        </span>
      )}
    </>
  );
}

export default ErrorMsg;
