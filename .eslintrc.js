module.exports = {
  "extends": ["airbnb-base"],
  "parserOptions": {
    "parser": 'babel-eslint',
    "ecmaVersion": 2018,
    "sourceType": "script",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "env": {
    "node": true,
    "browser": true,
    "jest": true
  },
  "rules": {
    "linebreak-style": [2 ,"unix"],
    "semi": [2, 'never'],
    "camelcase": 0,
    "max-len": [0,{ "code": 200 }],
    "object-curly-newline": 0,
    "global-require":0,
    "guard-for-in": 0,
    "no-unused-vars": [1, { "args": "none" }],
    "no-shadow": [2, { "allow": ["err","error"] }],
    "no-lone-blocks": 0,
    "no-plusplus":0,
    "no-param-reassign": 0,
    "no-loop-func":0,
    "no-await-in-loop":0,
    "no-restricted-syntax":0
  }
}
