import "./widget.scss";
import USERNAME from "./img/4.png"
import PIN from "./img/1.png"
import EMAIL from "./img/44.png"
import PASSW from "./img/3.png"





const Widget = ({ type }) => {
  let data;


  //temporary
  const amount = 500;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERNAME",
        icon: (
          <img
            src={USERNAME}
            className="icon"
            style={{
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Phone no",
        // quantity:2250,
        icon: (
          <img
          src={PIN}
            className="icon"
            style={{
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EMAIL",
        // quantity:,
        icon: (
          
          <img
            src={EMAIL}
            className="icon"
            style={{
              color: "crimson",

            }}
          />
        ),
   
      };
      break;
    case "balance":
      data = {
        title: "PASSWORD",
        quantity:"",
        icon: (
          <img
          src={PASSW}
            className="icon"
            style={{
              color: "crimson",
              
            }}
          />
        ),

      };
      break;


    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
            {data.quantity}
            {data.link}
        </span>
      </div>
      <div className="right" >
        <div className="percentage positive">
        </div>
        {data.icon}
      </div>
    </div>
    

  );
};

export default Widget;
