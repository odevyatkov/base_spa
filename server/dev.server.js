import inquirer from 'inquirer';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack.config';

inquirer.prompt([
  {
    type: 'list',
    name: 'entry',
    choices: Object.keys(config.entry),
    default: 'spa',
    message: 'Which entry do you want to serve?'
  },
  {
    type: 'input',
    name: 'port',
    message: 'Which port to listen on?',
    default: 3000
  }
]).then(answers => {
  initialize(answers);
});

function initialize({ entry, port }) {
  const app = require('./app').default;

  config.entry = { [entry]: config.entry[entry] };

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../src/apps/' + entry + '/index.html'));
  });

  app.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  });
}
