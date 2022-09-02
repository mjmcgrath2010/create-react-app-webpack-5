#! /usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
    return true;
  } catch (e) {
    console.error(`❌ Error!`, e);
    return false;
  }
};

const repoName = process.argv[2];
const gitCheckoutCommandWeb = `git clone --depth=1 git@github.com:mjmcgrath2010/react-app-webpack-5-template.git ${repoName}`;
const installCheckoutCommandWeb = `cd ${repoName} && yarn --silent && yarn prepare && git remote remove origin && git init`;

/**
 * CHECKOUT
 */

console.log(`🛠 Creating ${repoName} graphql,express, mongo api.`);
const checkout = runCommand(gitCheckoutCommandWeb);
if (!checkout) {
  process.exit(-1);
}
console.log(`✅ ${repoName} created success!`);

/**
 * INSTALL
 */

console.log(`⬇️ Installing dependencies`);
const install = runCommand(installCheckoutCommandWeb);
if (!install) {
  process.exit(-1);
}
console.log(`✅ Installing dependencies success!`);

console.log(
  `
🎉 Setup Complete!
To get started, run:

> cd ${repoName}
> yarn dev

🚀🚀🚀🚀
`
);
