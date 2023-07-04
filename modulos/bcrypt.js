import bcrypt from 'bcrypt';

let password = 'contrasenia'
async function encriptar(){
 /**
  * * encripta la contraseña
  */
 let hash = await bcrypt.hash(password, 5) 
  console.log(hash);
 /**
  * * compara si el hash es igual a la variable password
  */
  let verificar = await bcrypt.compare(password, hash) 
   try {
    console.log(verificar);
   } catch (error) {
       console.log(error);
   };
}
encriptar()