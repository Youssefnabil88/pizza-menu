import { useState, useEffect } from "react";

function Footer() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().getHours());
    }, 1000);
  }, []);

  const hour = new Date().getHours();
  
  const openHour = 12;
  const closeHour = 22;

  function isOpen(){
    if(hour >= openHour && hour <= closeHour){
      return "We're open now";
    }
    else{
      return "Sorry we are closed!";
    }
  }




  return (
    <>
    <footer className="footer">
      <h3 > {new Date().toLocaleTimeString()} {isOpen()}</h3>
    </footer>
      
    </>
  );
}

export default Footer;
