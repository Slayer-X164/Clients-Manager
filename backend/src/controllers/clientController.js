import * as clientService from "../services/clientServices.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (err) {
    console.error("error fetching clients:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createClient = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await clientService.createClient(clientData);
    res.status(200).json(newClient);
  } catch (err) {
    console.error("error while creating clients:", err.message, err.stack);
    res.status(500).json({ message: "client creation error" });
  }
};

export const updateClient = async(req,res)=>{
  try{
    const id = req.params.id
    const clientData = req.body
    const updatedClient = await clientService.updateClient(id,clientData)
    if(!updatedClient){
      return res.status(404).json({meesage:'client not updated'})
    }
    res.status(200).json(updatedClient)
  }catch(err){
    console.error('error while updating client',err);
    res.status(500).json({message:'internal server error'})

  }
}

export const deleteClient = async (req,res) => {
  try{
    const id = req.params.id
    const deleted = await clientService.deleteClient(id)
    if(!deleted){
      return res.status(404).json({message:'client not deleted'})
    }
    res.status(200).send()
  }catch(err){
    console.error('error while deleting client',err);
    res.status(500).json({message:'internal server error'})
  }
}

export const searchClient = async (req,res) => {
  try{
    const searchTerm = req.query.q
    const result = await clientService.searchClient(searchTerm)
    res.status(200).json(result)
  }catch(err){
    console.error('error while searching client',err);
    res.status(500).json({message:'internal server error'})
  }
}
