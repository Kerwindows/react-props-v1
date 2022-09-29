import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
return (
  <Card 
  id={contact.id} 
  key={contact.id}   
  name={contact.name} 
  img={contact.imgURL} 
  email={contact.email} 
  tel={contact.phone} 
  />
)
}



function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://th.bing.com/th/id/OIP.QAOT0kv3d29TwvAdU1-5qQAAAA?pid=ImgDet&rs=1" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
