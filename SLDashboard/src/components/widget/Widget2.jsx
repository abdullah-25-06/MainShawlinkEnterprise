import "./widget2.scss";
import logo from "./img/logo.png"





const Widget2 = ({type}) => {
  let data;
  switch (type) {
    case "logo":
      data = {
        
        icon: (
          <img
            src={logo}
            className="icon"
            style={{
              color: "crimson",
            }}
          />
        ),
      };
      break;
    }


          return (
                    <div className="widget2">
                    <div className="left">
                      <span className="title"></span>
                      <span className="counter">
                        
                      
                          
                      </span>
                    </div>
                    <div className="right" style={{width:"150px",height:"150px"}}>
                      <div className="percentage positive">
                      
                      </div>
                      {/* {data.icon} */}
                    </div>
                  </div>

          );
};

export default Widget2;
