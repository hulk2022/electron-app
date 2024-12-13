module.exports = {
  // 单行长度，超过则会换行
  printWidth: 120,
  // 缩进宽度，2个空格，与editorconfig保持一致
  tabWidth: 2,
  // 缩进方式，使用空格，不使用tab，与editorconfig保持一致
  useTabs: false,
  // 句末使用分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  //仅在必需时为object对象的key添加引号
  quoteProps: 'as-needed',
  // jsx语法使用双引号
  jsxSingleQuote: false,
  // ES5语法的尾部增加逗号，Array数组的最后一项、Object对象的最后一个属性等后面增加逗号
  trailingComma: 'es5',
  // 在对象前后添加空格-如 { foo: bar }
  bracketSpacing: true,
  // 多属性html标签的‘>’折行放置
  bracketSameLine: false,
  // 多属性jsx标签的‘>’折行放置
  jsxBracketSameLine: false,
  // 箭头函数的参数尽可能避免使用括号
  arrowParens: 'avoid',
  // 换行符号 windows使用crlf，mac、Linux使用lf，自动auto
  endOfLine: 'auto',
  // import优化插件 https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports
  // plugins: ['@trivago/prettier-plugin-sort-imports'],
  // 三方包在顶部 其次是@xx开头的，然后是@/开头的，最后是相对路径
  importOrder: ['<THIRD_PARTY_MODULES>', '^@\\w', '^@/', '^[./]'],
  // import分组直接不需要换行
  importOrderSeparation: false,
  // 对导入的TS声明进行排序
  importOrderSortSpecifiers: true,
};
