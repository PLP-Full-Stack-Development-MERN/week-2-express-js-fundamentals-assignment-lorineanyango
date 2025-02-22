 
 
 export const loggerMiddlware = (req, res, next)=>{
  console.log(`${req.method} - ${req.url}`);
  next();
 }