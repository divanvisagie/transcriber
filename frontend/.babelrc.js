const env = require("./env-config.js")

module.exports = {
  presets: ["next/babel", "@zeit/next-typescript/babel"],
  plugins: ["babel-plugin-styled-components", ["transform-define", env]],
}
