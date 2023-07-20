export const Create = (data) =>{
   return{
    type : "Create",
    payload : data
   }
}

export const Edit = (data) =>{
    return{
     type : "Edit",
     payload : data
    }
 }

 export const Delete = (data) =>{
    return{
     type : "Delete",
     payload : data
     
    }
 }