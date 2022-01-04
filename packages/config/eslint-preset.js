module.exports = {
    extends: [
        "next",
        "prettier",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    settings: {
        next: {
            rootDir: ["apps/*/", "packages/*/"],
        },
    },
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
    },
};
