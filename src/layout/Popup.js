const popup = (props) => {
    return (
      <div>
        <p>{props.message}</p>
        <button onClick={props.closeMe}>Close Popup</button>
      </div>
    );
    }