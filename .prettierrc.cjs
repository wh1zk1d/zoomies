module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  tabWidth: 2,
  trailingComma: "es5",
  singleQuote: true,
  printWidth: 80,
}
