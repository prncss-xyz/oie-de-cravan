const breaks = require('remark-breaks');
const visit = require("unist-util-visit");

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'text', node => {
    node.value = node.value.replace('\'', '’')
  });
  return markdownAST;
}

module.exports.setParserPlugins = () => [breaks] ;
