module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    "overrides": [         
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "jsx-a11y/label-has-associated-control":0,
        "jsx-a11y/control-has-associated-label":0,
        "no-bitwise":0,
        "no-plusplus":0
    }
}
