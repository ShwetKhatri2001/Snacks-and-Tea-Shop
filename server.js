const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const connectDB = require("./config/db");

dotenv.config();
const PORT = process.env.PORT || 5000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Snacks And Tea API",
      version: "1.0.0",
      description: "Snacks And Tea API created with NodeJs & ExpressJs",
    },
    servers: [
        {
          url: `http://localhost:${PORT}`,
        },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express(); 
app.use(cors());
app.use(express.json());

connectDB();

const orderRouter = require('./routes/orderRoutes');
const menuRouter = require('./routes/orderRoutes');
const empRouter = require('./routes/orderRoutes');

app.use('/api/order', orderRouter);
app.use('/api/menu', menuRouter);
app.use('/api/emp', empRouter);;

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }

// start express server on port 5000 or process.env.PORT
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}/`)
);
