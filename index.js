module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/interface-name-prefix": ["error", { "prefixWithI": "always" }],
    '@typescript-eslint/no-explicit-any': ["warn", { "ignoreRestArgs": true }],
    'no-console': 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 'off',
    'no-tabs': 'off',
    // 强制使用单引号
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    // 不使用分号
    'semi': [
      'error',
      'never',
      {
        'beforeStatementContinuationChars': 'never'
      }
    ],
    'no-delete-var': 'error', // 不能对var声明的变量使用delete操作符
    'no-multi-spaces': 'warn', //不能用多余的空格
    // 禁止尾随逗号
    'comma-dangle': 'error',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': [
      'error',
      {
        'ignoreReadBeforeAssign': false
      }
    ]
  },
};
