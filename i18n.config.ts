const languages = [
  { id: "en", title: "English" },
  { id: "pt", title: "Portuguese", isDefault: true },
];

const i18n = {
  languages,
  base: languages.find((item) => item.isDefault)?.id,
};

export { i18n };
