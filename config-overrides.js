// webpack config-overrides
// add hjson handling to the webpack config.
// this uses `react-app-rewired` to modify the base `create-react-app` webpack config,
// so can modify it without ejecting create-react-app.
// also need to do
//   yarn add hjson
//   yarn add -D hjson-loader
// note: this filename is fixed by react-app-rewired.


const { getLoader } = require('react-app-rewired');

// rewire config to include hjson files
// see https://github.com/webpack-contrib/raw-loader
function rewireAddHjson(config, env, options = {}) {

  const hjsonExtension = /\.hjson$/;

  // exclude hjson files from ______
  const excludeRule = getLoader(config.module.rules, rule => rule.exclude);
  excludeRule.exclude.push(hjsonExtension);

  // add a rule to use 'raw-loader' for hjson files
  const hjsonRule = {
    test: hjsonExtension,
    // loader: 'raw-loader',
    loader: 'hjson-loader',
  };
  config.module.rules.push(hjsonRule);

  // console.log(config.module.rules);

  return config;
}


// rewire config to include mp3 files
// see https://github.com/webpack-contrib/raw-loader
function rewireAddMp3(config, env, options = {}) {

  const mp3Extension = /\.mp3$/;

  // exclude mp3 files from ______
  const excludeRule = getLoader(config.module.rules, rule => rule.exclude);
  excludeRule.exclude.push(mp3Extension);

  // add a rule to use 'raw-loader' for mp3 files
  const mp3Rule = {
    test: mp3Extension,
    loader: 'file-loader',
  };
  config.module.rules.push(mp3Rule);

  // console.log(config.module.rules);

  return config;
}



// modify the existing webpack config
// see https://github.com/timarney/react-app-rewired
module.exports = function override(config, env) {
  config = rewireAddHjson(config, env);
  config = rewireAddMp3(config, env);
  return config;
};

