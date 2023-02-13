import { createContext, useState } from "react";



 const userrContext = createContext({
    user:{
        user:"linta",
        email:"lintarbaill@gmail.com"
    }
  
 });

 export default userrContext;
