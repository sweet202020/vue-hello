/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data 

Aggiungere alla pagina un’immagine, presa anch’essa da un data*/

const {createApp}= Vue

createApp({
    data(){
        return{
          message: 'un messaggio',  
          immagine: 'https://i.ebayimg.com/images/g/QccAAOSwTO9Z~5xB/s-l500.jpg'
        } 
    }
}).mount('#app')