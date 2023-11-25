
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

// Load Swagger OpenAPI documentation
const swaggerDocument = YAML.load('../openapi.yaml');

// Use Swagger UI middleware to serve documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ... (other routes and middleware)

module.exports = app; // Export the app
