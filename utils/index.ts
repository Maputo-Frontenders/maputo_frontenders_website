import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

export function ParserToHtml(text: string, allowedAttributes: string[] = []) {
  return parse(
    DOMPurify.sanitize(text, {
      ALLOWED_ATTR: allowedAttributes,
    })
  );
}
