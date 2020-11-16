import express from 'express';



//inicializacion express desde una constante app quye tendra toda la funcionalidad de express

const app = express();



//Settings del servidor mediante metodoos express

app.set('port',3000);


//levantar servidor

app.listen(app.get('port'), ()=>{
    console.log(`el servidor se ha levantado otra vez ${app.get('port')}`);
    
} );
