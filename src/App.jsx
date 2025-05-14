import React, { useState ,useEffect} from "react";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Form from "./components/Form";
import axios from "axios";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [FormMode, setFormMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientdata, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [error,setError] = useState(null)
   const [status, setStatus] = useState('inactive');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/clients");
        setTableData(res.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setIsOpen(!isOpen);
    setFormMode(mode);
  };

  const handleSubmit = async (newClientData) => {
    if (FormMode === "add") {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/clients",
          newClientData
        );
        console.log("data:", res.data);
        setTableData((prevData) => [...prevData, res.data]);
      } catch (error) {
        console.error("error adding client:", error);
      }
    } else {
      console.log("Form mode edit, for client",clientdata.id);
      try {
        const res = await axios.put(`http://localhost:3000/api/clients/${clientdata.id}`,newClientData)
        setTableData(prev=>
          prev.map(client=> (
            client.id === clientdata.id ? res.data : client
          ))
        )
      } catch (error) {
        console.error('error updating client',error);

      }
    }
  };

  const deleteData = async(id)=>{
    const confirmDeleteData = window.alert('Are you sure you want to delete thsi client? ')
    if(!confirmDeleteData){
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`)
        setTableData(prev=>prev.filter(client=>client.id !== id))

      } catch (error) {
        setError(error.message);


      }
    }
  }

  return (
    <div className="w-screen h-screen bg-neutral-950">
      <Navbar onOpen={()=>handleOpen('add')} onSearch={setSearchTerm} />
      <Clients setTableData={setTableData} tableData={tableData}
      handleOpen={handleOpen} searchTerm={searchTerm} error={error}
      deleteData={deleteData}
      status={status}/>

      <Form
        onSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        mode={FormMode}
        clientdata={clientdata}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
};

export default App;
