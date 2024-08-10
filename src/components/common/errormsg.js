function ErrorMsg(props)
{
    return (
        <>
        {!props.valid && <span className="error-msg">{props.msg} 
        <i className="fa fa-solid fa-regular fa-exclamation "></i> 
        </span>}
        </>
    )
}

export default ErrorMsg;