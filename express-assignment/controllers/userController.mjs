import { mockUsers } from "../utils/constants.mjs";
import { request } from "express";



export const getUsers = (req, res)=>{
    console.log(req.query)
    const filter = req.query.filter;
    const value = req.query.value;
  
    if(filter && value){
      return response.send(mockUsers.filter((mockUser)=> mockUser[filter].includes(value))
    )
    }
    res.send(mockUsers);
}



export const getUserById = (req, res)=>{
  const userId = parseInt(req.params.id)// we are converting the id to int becz its in string
  if(isNaN(userId)){
    return res.status(400).send("Bad Request! invalid id");
  }
  const findUser = mockUsers.find((mockUser)=>mockUser.id === userId);
  if(!findUser) {
    return res.sendStatus(404);
  }
  return res.send(findUser)
}



export const addUser = (req, res)=>{
  const body = req.body;
  const newUser = {id:mockUsers.length + 1, ...body};
  mockUsers.push(newUser);
  return res.status(201).send(newUser);

}



export const updateUserById= (req, res)=>{
  const parsedId = parseInt(req.params.id);
const body = req.body;
if(isNaN(parsedId)){
  return res.status(400).send("Bad Request! invalid ID");
}
var findUser = mockUsers.find((mockUser)=>mockUser.id === parsedId);
if(!findUser){
  return res.sendStatus(404);
}
findUser = {id: parsedId, ...body};
return res.status(200).send(findUser);
}


export const deleteUserById =(req, res)=>{
  const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
        return res.status(400).send("Bad Request! Invalid ID");
    }
    const userIndex = mockUsers.findIndex(mockUser => mockUser.id === parsedId);
    
    if (userIndex === -1) {
        return res.sendStatus(404); // User not found
    }
    mockUsers.splice(userIndex, 1);
    return res.sendStatus(200);
}