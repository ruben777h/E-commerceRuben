const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Paquetes Jira', 
      oldPrice: 37500, 
      price: 35000, 
      urlImg: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.openproject.org%2Fes%2Fblog%2Falternativa-open-source-a-jira%2F&psig=AOvVaw0fny7wSET-CMJsb-HuWxXk&ust=1730484613843000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiX24OcuYkDFQAAAAAdAAAAABAE'
    },
    {
      id: 2, 
      name: 'Campera Keyboard programador',  
      oldPrice: 11500, 
      price: 11200, 
      urlImg: 'https://purodiseno.lat/wp-content/uploads/2023/04/CAMPERA-TECLADO-2-821x1024.jpg' 
    },
    { 
      id: 3, 
      name: 'Disco-solido interno kingston sata-960g',  
      oldPrice: 18500, 
      price: 18000, 
      urlImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwqHX1fVP2DUn6mEw05ukydZ6KOgkf0w3N3ZEHHJnDUW7WtxSEzdOZ73YxCn-FBC5kYxGeF4wy9zakpXVDOXbjQouNAmyH1LTbzkyuK2t0u9We1eAqfkFFDw&usqp=CAE' 
    },
    { 
      id: 3, 
      name: 'Taza Código De Programacion',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_786656-MLA46832914211_072021-O.webp' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});