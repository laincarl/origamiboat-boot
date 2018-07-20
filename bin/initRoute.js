const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const RouteTemplatePath = path.resolve(__dirname, '../RouteTemplate.js');
const RouteTargetPath = path.resolve(__dirname, '../src/App.js');
// const packageInfo = require(getPackagePath(module));
// Object.assign(dependencies, packageInfo.dependencies);

const packagePath = path.resolve(process.cwd(), 'package.json');
const packageInfo = require(packagePath);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const { main, name } = packageInfo;
const mainPath = path.resolve(process.cwd(), main);

function escapeWinPath(Path) {
  return Path.replace(/\\/g, '\\\\');
}

async function CreateFiles(originPath, targetPath, replaceCode) {
  // fs.mkdir(path.resolve(basicPath, `${targetPath}`), () => {
  let data = await readFile(originPath, 'utf8');
  // 内容替换
  Object.keys(replaceCode).forEach((code) => {
    const reg = new RegExp(`{%${code}%}`, 'g');
    data = data.replace(reg, match => replaceCode[code]);
  });
  const value = await writeFile(targetPath, data);
  // await会阻塞后面代码
  console.log(path.basename(targetPath), '创建成功');
  return value;
}


async function initRoute() {
  const imports = [];
  imports.push(`import ${name} from '${escapeWinPath(mainPath)}'`);
  const routes = [
    `<Route path="/${name}" component={${name}} />`,
  ];
  
  // if (imports.length > 0 && routes.length > 0) {
  await CreateFiles(RouteTemplatePath, RouteTargetPath, { imports, routes });
    
  console.log('success!');
  // }
}
module.exports = initRoute;
