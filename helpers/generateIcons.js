const fs = require("fs");
process.chdir("../src/assets/icons");

const files = fs.readdirSync("./").map((name) => name.replace(".svg", ""));

// TODO convert to reduce
const generateImports = () => {
  return files.reduce((prev, curr) => {
    const splited = curr.split("");
    splited[0] = splited[0].toUpperCase();
    const name = splited.join("");
    return (
      prev +
      `import { ReactComponent as ${name} } from "@assets/icons/${curr}.svg";\n`
    );
  }, "");
};

const generateObject = () => {
  let str = "export const iconsList = {\n";

  files.forEach((file) => {
    const splited = file.split("");
    splited[0] = splited[0].toUpperCase();
    const name = splited.join("");

    str += `\t${file}: <${name} />,\n`;
  });

  str += "};";

  str += `export type IconsListKeys = keyof typeof iconsList;`;

  return str;
};

process.chdir("../../utils/");

fs.writeFileSync("./iconList.tsx", `${generateImports()}\n${generateObject()}`);
