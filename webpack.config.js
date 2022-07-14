const { table } = require("table");
const { DefinePlugin } = require("webpack");

const { version } = require("./package.json");

module.exports = (config) => {
  process.env.NODE_ENV = process.env.NODE_ENV || config.mode || "development";

  const define = {
    BUILD_ENV: JSON.stringify(process.env.NODE_ENV),
    APP_VERSION: JSON.stringify(version),
  };
  console.log(
    "\n\n" +
      table(
        Object.entries(define).map(([k, v]) => [k, JSON.parse(v)]),
        { columns: [{}, { alignment: "right" }] }
      )
  );
  config.plugins.push(new DefinePlugin(define));

  return config;
};
