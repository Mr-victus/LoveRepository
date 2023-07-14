import React from "react";
import "./styles.css";
import { Link } from "react-scroll";

const Screen = (props) => {
  let titles=['The Instagram Chat', 'The May', 'The Monday', 'The Goodbye', 'The Sambalpur visit', 'The july', 'The Goa Trip', 'The Wait', 'The January', 'The Wait 2', 'The Kashmir', 'The Fights', 'The Almost End']
  const renderTitleButtons = () =>{
    let arr =[]
    for (let i = 0;i<6;i++)
    {
      arr.push(<Link
            activeClass="active"
            to={i}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
            style={{marginLeft:'5%'}}
          >{titles[i]}</Link>)
    }
    return arr
  }
  const renderSecondTitleButtons = () =>{
    let arr =[]
    for (let i = 6;i<13;i++)
    {
      arr.push(<Link
            activeClass="active"
            to={i}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
            style={{marginLeft:'5%'}}
            
          >{titles[i]}</Link>)
    }
    return arr
  }
  return (
    <div id={Number(props.sequency)} className="screen-full" style={{background: props.bgColor, color: props.textColor}}>
       {props.sequency == 1 ?<>
       <div style={{flexDirection : 'row', width:'100%',justifyContent:'space-between'}}>
        {renderTitleButtons()}
      </div>
      <div style={{flexDirection : 'row', width:'100%',justifyContent:'space-between',marginTop:'5%'}}>
        {renderSecondTitleButtons()}
      </div>
      </>:null}
      <div className="container">
     
        <header>
          <img src={props.imageUrl} alt="simple gif" />
        </header>
        <div>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <footer>
          <Link
            activeClass="active"
            to={props.sequency == 19 ? Number(1) : Number(props.sequency) + 1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
          >{props.btnText}</Link>
          {props.sequency == 1 ?null :<Link
            activeClass="active"
            to={Number(props.sequency) - 1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
            style={{margin : '10%'}}
          >{"Go previous"}</Link>}
          {props.sequency == 1 ?null :<Link
            activeClass="active"
            to={1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
            style={{margin : '10%'}}
          >{"Go Top"}</Link>}
        </footer>
      </div>
    </div>
  );
};

export default Screen;
