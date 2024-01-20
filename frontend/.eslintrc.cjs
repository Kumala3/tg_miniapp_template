module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "@typescript-eslint"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "react/prop-types": 0,
        "indent": ["error", 4],
        "linebreak-style": 1,
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
    },
};
