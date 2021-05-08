// Attaching plugins to express app.
import Express from 'express';
import jsdoc from 'express-jsdoc-swagger'; 

import initConnection from './lib/db';
import router from './router';



// DB
initConnection();

// Routing
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/', router);

// API Spec
const options = {
    info: {
      version: '0.0.1',
      description: 'kuaaa.net API spec',
      title: 'kuaaa.net',
      license: {
        name: 'MIT',
      },
    },
    security: {
      BasicAuth: {
        type: 'http',
        scheme: 'basic',
      },
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './**/*.ts',
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/spec',
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: false,
    // Open API JSON Docs endpoint.
    apiDocsPath: '/v1/spec',
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
    // You can customize your UI options.
    // you can extend swagger-ui-express config. You can checkout an example of this
    // in the `example/configuration/swaggerOptions.js`
    swaggerUiOptions: {},
  };
jsdoc(app)(options);

export default app;
