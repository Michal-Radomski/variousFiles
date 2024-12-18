async function parseColorsFromYAML(url: string): Promise<string[]> {
  try {
    // Fetch the YAML file from the URL
    const response = await fetch(url);
    // console.log("response:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const fileContents: string = await response.text();
    const colors: string[] = [];

    // Split the file contents into lines
    const lines: string[] = fileContents.split("\n");
    // console.log("lines:", lines);

    // Iterate through each line
    for (const line of lines) {
      // Trim leading and trailing whitespace
      const trimmedLine = line.trim();

      // Check if the line is empty or a comment
      if (trimmedLine === "" || trimmedLine.startsWith("#")) {
        continue;
      }
      // console.log("trimmedLine:", trimmedLine);

      if (line.includes("color:")) {
        // console.log(line);
        const color = line.split(": ")?.[1].replaceAll('"', "");
        // console.log("color:", color);
        colors.push(color);
      }
    }

    return colors;
  } catch (error) {
    console.error("Error fetching or parsing the YAML file:", error);
    return [];
  }
}

const url = "https://raw.githubusercontent.com/github-linguist/linguist/master/lib/linguist/languages.yml";

parseColorsFromYAML(url)
  .then((colors: string[]) => {
    const filteredColors = [...new Set(colors)];
    console.log("filteredColors:", filteredColors);
  })
  .catch((error) => console.log("error:", error));
  
  
const colorsArray = [
  '#814CCC', '#38761D', '#004289', '#E8274B', '#555e25', '#B9D9FF', '#34EB6B',
  '#3AA2B5', '#E6EFBB', '#9DC3FF', '#2ACCA8', '#5A8164', '#9400ff', '#1ac620',
  '#882B0F', '#02f88c', '#800000', '#fa0f00', '#315665', '#64C800', '#0D597F',
  '#A89663', '#C7D7DC', '#A9157E', '#ff269e', '#d12127', '#1797c0', '#0B3D91',
  '#101F1F', '#aa2afe', '#73a0c5', '#a957b0', '#6E4C13', '#ff5a03', '#ff0000',
  '#9CC134', '#6594b9', '#1C3552', '#0040FF', '#c30e9b', '#2b7067', '#FF5000',
  '#C1F12E', '#a52f4e', '#15A13C', '#778899', '#519aba', '#5562ac', '#6A463F',
  '#00bce4', '#f7523f', '#00FFAE', '#cd6400', '#12223c', '#d4bec1', '#c80fa0',
  '#2F2530', '#66AABB', '#662D91', '#ffd539', '#555555', '#178600', '#f34b7d',
  '#0092d1', '#00A300', '#DA3434', '#F1A42B', '#244776', '#563d7c', '#237346',
  '#5886E1', '#00007a', '#483465', '#22b638', '#00ef8b', '#ff4a48', '#3be133',
  '#c42727', '#dfa535', '#8dc63f', '#3f8000', '#707575', '#ccccff', '#db901e',
  '#5546ff', '#6a40fd', '#3F85AF', '#E4E6F3', '#db5855', '#0d948f', '#FFA000',
  '#140f46', '#ed2cd6', '#3fb68b', '#B5314C', '#B0CE4E', '#d0b68c', '#000100',
  '#1a1a1a', '#3A4E3A', '#531242', '#34c0eb', '#fedf5b', '#ba595e', '#526ee8',
  '#447265', '#FFEC25', '#8eff23', '#00B4AB', '#003a52', '#D70751', '#FBEE96',
  '#dfafff', '#aace60', '#384d54', '#cca760', '#e5d559', '#6c616e', '#ccce35',
  '#8a1267', '#001d9d', '#a91e50', '#a78649', '#2af0ff', '#069406', '#913960',
  '#eb8131', '#0dffe0', '#31A7FF', '#fff1f2', '#4d6977', '#6e4a7e', '#60B5CC',
  '#55BB55', '#c065db', '#FFF4F3', '#B83998', '#FF790B', '#b845fc', '#572e30',
  '#FFDDBB', '#2f632f', '#88ccff', '#636746', '#7b9db4', '#14253c', '#c37240',
  '#fff3d7', '#F6B900', '#ffcc33', '#341708', '#4d41b1', '#141AC9', '#0050b2',
  '#00cafe', '#5f021f', '#D08CF2', '#FFC766', '#f49a22', '#0000cc', '#FFCFAB',
  '#355570', '#003058', '#5686a5', '#FF6800', '#71b417', '#701516', '#ff6900',
  '#63408e', '#d8df39', '#fb855d', '#951531', '#d20b00', '#5B2063', '#F44D27',
  '#ffaff3', '#F5835F', '#3178c6', '#c1ac7f', '#f0a9f0', '#00ADD8', '#88562A',
  '#82937f', '#615f8b', '#02303a', '#e10098', '#2596be', '#4298b8', '#106da9',
  '#844FBA', '#9ff8ee', '#e34c26', '#2e1052', '#4f5d95', '#512be4', '#005C9C',
  '#f68712', '#878787', '#ece2a9', '#f7931e', '#0e60e3', '#5e5086', '#df7900',
  '#dce200', '#ffefaf', '#308888', '#7790B2', '#a3522f', '#d1dbe0', '#b30000',
  '#000000', '#99AAFF', '#16cec6', '#264b99', '#a9188d', '#078193', '#FEFE00',
  '#9EEDFF', '#b07219', '#d90e09', '#DBCA00', '#292929', '#267CB9', '#0c479c',
  '#40d47e', '#0886a5', '#d03600', '#2A6277', '#f1e05a', '#15c213', '#21D789',
  '#a52a22', '#56b3cb', '#843179', '#0064bd', '#a270ba', '#DA5B0B', '#28430A',
  '#773b37', '#6f8042', '#41adf0', '#2f4aab', '#A97BFF', '#4C3023', '#185619',
  '#cc9900', '#3d9970', '#fede06', '#2980B9', '#999999', '#f2a542', '#1d365d',
  '#0e74ff', '#9ccc7c', '#67b8de', '#499886', '#295b9a', '#652B81', '#000080',
  '#00A2FF', '#e16737', '#00a6a6', '#fcb32c', '#5EC8DB', '#62A8D6', '#4A76B8',
  '#b7e1f4', '#d8ffff', '#427819', '#7e858d', '#083fa1', '#42bff2', '#f97732',
  '#dd1100', '#c4a79c', '#ff2b2b', '#ff3670', '#007800', '#8f14e9', '#ff1111',
  '#02b046', '#c7a938', '#de1d31', '#10253f', '#223388', '#ff4c1f', '#8D6747',
  '#ff4585', '#fbb03b', '#005daa', '#4a137a', '#724b3b', '#28431f', '#00356B',
  '#cb3837', '#111522', '#1d2c4e', '#990000', '#3d3c6e', '#0aa0ff', '#747faa',
  '#ff6375', '#87AED7', '#3ac486', '#009639', '#ffc200', '#009917', '#7e7eff',
  '#c9df40', '#9C8AF9', '#3d8137', '#4E9906', '#85ea2d', '#ef7a08', '#424893',
  '#438eff', '#6866fb', '#ff0c5a', '#60AFFE', '#cabbff', '#f7ede0', '#7d9199',
  '#ed2e2d', '#5ce600', '#AA70FF', '#e5cd45', '#476732', '#77aa99', '#cdd0e3',
  '#fab738', '#7055b5', '#0d00ff', '#234d6b', '#4F5D95', '#dad8d8', '#336790',
  '#6bac65', '#F7A8B8', '#cc0000', '#6600cc', '#f3ca0a', '#E3F171', '#dbb284',
  '#C76F5B', '#0298c3', '#6067af', '#fcd7de', '#005390', '#FFD343', '#6b9543',
  '#fbbd16', '#d80074', '#ae81ff', '#f8bd00', '#dc3a0c', '#da291c', '#8f0f8d',
  '#012456', '#c8506d', '#0c344b', '#0096D8', '#3B2F63', '#74283c', '#de0000',
  '#7fa2a7', '#a86454', '#302B6D', '#5a6986', '#1D222D', '#ee1e10', '#3572A5',
  '#fed659', '#44a51c', '#00b841', '#882233', '#198CE7', '#77d9fb', '#198ce7',
  '#a62c00', '#2BDE21', '#665a4e', '#3c5caa', '#9d5200', '#0000fb', '#fffaa0',
  '#ed5051', '#ff5847', '#358a5b', '#0673ba', '#f50000', '#009a00', '#ff7f7f',
  '#FFDAB3', '#2D54CB', '#A71E49', '#00c0b5', '#7c38f5', '#ecdebe', '#cc0088',
  '#DE3941', '#dea584', '#B34936', '#c6538c', '#0C4597', '#3F3F3F', '#e38c00',
  '#348a34', '#373b5e', '#ff9900', '#646464', '#a53b70', '#c22d40', '#bd181a',
  '#fdc700', '#1e4aec', '#ca0f21', '#0579aa', '#222c37', '#89e051', '#cecfcb',
  '#120F14', '#C9BFED', '#64E6AD', '#007eff', '#003fa2', '#2b2b2b', '#2379F4',
  '#c94949', '#596706', '#f0c040', '#c44536', '#419179', '#AA6746', '#f69e1d',
  '#b2011d', '#dc566d', '#76d275', '#1a5f91', '#3fb34f', '#ff6347', '#9e0101',
  '#2fcc9f', '#46390b', '#ff3e00', '#00F58C', '#F05138', '#DAE1C2', '#A0AA87',
  '#C40023', '#4b0079', '#9c4221', '#0178b8', '#333333', '#e4cc98', '#3D6117',
  '#00004c', '#7b42bb', '#df66e4', '#ffe7ac', '#D12127', '#c2c9fb', '#cf142b',
  '#c1d026', '#239dad', '#4e3617', '#9933cc', '#a54c4d', '#ccccee', '#4f87c4',
  '#867db1', '#15dcdc', '#148AA8', '#adb2cb', '#a56de2', '#f26025', '#507cff',
  '#b2b7f8', '#199f4b', '#945db7', '#2c6353', '#1F1F1F', '#41b883', '#2980b9',
  '#42f1f4', '#1a5e9a', '#5b70bd', '#04133b', '#6250e7', '#d5c397', '#fc5757',
  '#52d5ff', '#a23738', '#f7e43f', '#383838', '#4B6BEF', '#99DA07', '#0060ac',
  '#5232e7', '#EB8CEB', '#81bd41', '#285EEF', '#24255d', '#cb171e', '#220000',
  '#32AB90', '#4B6C4B', '#794932', '#0d665e', '#dc75e5', '#00BCD1', '#118f9e',
  '#ec915c', '#d67711', '#ead7ac', '#4aae47', '#00b171', '#c7254e', '#1da6e0',
  '#3d57c3', '#E22837', '#244963', '#2d004d', '#94B0C7', '#b0b77e', '#0040cd',
  '#141414', '#64b970', '#66D0DD', '#7582D1', '#403a40'
]

console.log("colorsArray:", colorsArray)
