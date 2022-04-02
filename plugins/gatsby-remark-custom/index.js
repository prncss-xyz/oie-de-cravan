const visit = require('unist-util-visit');

const { typo_ajust } = require('../../util');

const find = /[\t ]*(?:\r?\n|\r)/g;

module.exports = ({ markdownAST }) => {
  visit(markdownAST, (node) => {
    node.value = typo_ajust(node.value);
  });

  // directly copied from https://github.com/remarkjs/remark-breaks
  // had to do this because plugin would not work in the regular way,
  // seems like a version compatibility problems
  visit(markdownAST, 'text', (node, index, parent) => {
    /** @type {PhrasingContent[]} */
    const result = [];
    let start = 0;

    find.lastIndex = 0;

    let match = find.exec(node.value);

    while (match) {
      const position = match.index;

      if (start !== position) {
        result.push({ type: 'text', value: node.value.slice(start, position) });
      }

      result.push({ type: 'break' });
      start = position + match[0].length;
      match = find.exec(node.value);
    }

    if (result.length > 0 && parent && typeof index === 'number') {
      if (start < node.value.length) {
        result.push({ type: 'text', value: node.value.slice(start) });
      }

      parent.children.splice(index, 1, ...result);
      return index + result.length;
    }
  });
  return markdownAST;
};
