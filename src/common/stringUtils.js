export const removeDialect = (entry) => {
  entry = entry.toLowerCase();
  entry = entry.replace(/\s/g, "_");
  if (!removeDialect.translate_re) removeDialect.translate_re = /[ąężźćółńś]/g;
  var translate = {
    ą: "a",
    ę: "e",
    ż: "z",
    ć: "c",
    ń: "n",
    ź: "z",
    ó: "o",
    ł: "l",
    ś: "s",
  };
  return entry.replace(removeDialect.translate_re, (match) => translate[match]);
};
