import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Form from "./components/Form";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [FormMode, setFormMode] = useState("add");

  const handleSubmit = () => {
    if (FormLoad === "add") {
      console.log("Form mode add");
    } else {
      console.log("Form mode edit");
    }
  };

  const handleOpen = (mode)=>{
    setIsOpen(!isOpen)
    setFormMode(mode)
  }

  return (
    <div className="w-screen h-screen bg-neutral-950">
      <Navbar onOpen={handleOpen} />
      <Clients handleOpen={handleOpen}/>
      <Form
        onSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={FormMode}
      />
    </div>
  );
};

export default App;
