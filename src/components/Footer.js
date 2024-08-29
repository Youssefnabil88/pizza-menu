import { useState, useEffect } from "react";
import Order from "./Order";


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

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <footer className="footer">
        <Order openHour={openHour} closeHour = {closeHour} isOpen={isOpen}/>
      </footer>
    </>
  );
}

export default Footer;
