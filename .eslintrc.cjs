module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2022: true,
    mocha: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 300,
        ignoreStrings: true,
        ignoreTrailingComments: true,
      },
    ],
    'no-console': 'off',
    'linebreak-style': [
      'error',
      'unix',
    ],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true, optionalDependencies: true, peerDependencies: false,
    }],
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
    'import/extensions': ['error', 'ignorePackages', { vue: 'always', js: 'never' }],
  },
  parserOptions: {
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.vue',
        ],
      },
    },
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off'
      }
    }
  ],
};
