import {query} from '../db.js'

export const getClients = async()=>{
    const {rows} = await query("SELECT * FROM clients")
    return rows
}

export const createClient = async(clientData)=>{
    const {name,email,job,rate,isactive} = clientData

    const { rows } = await query(
        `INSERT INTO clients (name, email, job, rate, isactive)
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, job, rate, isactive]
      );
    return rows[0]
}

export const updateClient = async (id,clientData) => {
    const {name,email,job,rate,isactive} = clientData
    const {rows} = await query(
        `UPDATE clients SET name = $1, email = $2, job = $3, rate = $4, isactive = $5
        WHERE id = $6 RETURNING *`,
        [name,email,job,rate,isactive,id]
    )
    return rows[0]
}

export const deleteClient = async (id) => {
    const result = await query(
        `DELETE FROM clients WHERE id = $1`,
        [id]
    );
    return result.rowCount > 0; // returns true if a row was deleted
};