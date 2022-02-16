const breaks = require('remark-breaks');
const visit = require('unist-util-visit');
const { typo_ajust } = require('../../util');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, (node) => {
    node.value = typo_ajust(node.value);
  });
  return markdownAST;
};

module.exports.setParserPlugins = () => [breaks];
