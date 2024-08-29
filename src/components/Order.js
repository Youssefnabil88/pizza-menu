export default function Order({openHour, closeHour, isOpen}){
    return <div className="order">
    <h3>
      {" "}
      {new Date().getHours().toLocaleString()}:00{" "}
      {isOpen && "We're currently open"} until {closeHour}:00
    </h3>
    <button className="btn"> order</button>
  </div> 
}