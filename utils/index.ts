import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

export function ParserToHtml(text: string, allowedAttributes: string[] = []) {
  return parse(
    DOMPurify.sanitize(text, {
      ALLOWED_ATTR: allowedAttributes,
    })
  );
}

export const getTranslationsLocal = () => [
  { language: "pt", path: "/pt" },
  { language: "en", path: "/en" },
];

export function formatDateToDDMMYYYY(date: string) {
  const parsedDate = new Date(date);
  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const year = parsedDate.getFullYear();
  return `${day}/${month}/${year}`;
}
