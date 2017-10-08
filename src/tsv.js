const placeholderText = {
  tableStart: '[[TABLE]]',
  tableEnd: '[[/TABLE]]',
  rowStart: '[[TABLE_ROW]]',
  rowEnd: '[[/TABLE_ROW]]',
  cellStart: '[[TABLE_CELL]]',
  cellEnd: '[[/TABLE_CELL]]',
};

export default function tsv(text, placeholders = placeholderText) {
  let { tableStart, tableEnd, rowStart, rowEnd, cellStart, cellEnd } = placeholders;
  if (text.indexOf('\t') === -1) return text;
  let result = '';
  let lines = text.split('\n');
  let delimiter = /\t/g;
  let inTable = false;
  lines.forEach((chars, index, arr) => {
    let line = chars;
    if (!line) line = '\n';
    if (line.indexOf('\t') === -1) {
      if (inTable) {
        inTable = false;
      }
      if (index === arr.length - 1) {
        result += line;
      } else {
        result += `${line}\n`;
      }
      return;
    }

    let newLine = '';
    line.split(delimiter).forEach((content) => {
      newLine += cellStart + content + cellEnd;
    });

    newLine = `${rowStart}${newLine}${rowEnd}`;

    if (!inTable) {
      newLine = tableStart + newLine;
      inTable = true;
    }
    // if this is the last line close the table
    if (index === arr.length - 1) newLine += tableEnd;
    if (arr[index + 1] === '' && arr[index + 1].length === 0) newLine += tableEnd;
    if (arr[index + 1] && arr[index + 1].indexOf('\t') === -1) newLine += `${tableEnd}\n`;
    result += newLine;
  });
  return result;
}
