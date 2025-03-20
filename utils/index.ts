import DOMPurify from "isomorphic-dompurify";
import ReactHtmlParser from "react-html-parser";

export function ParserToHtml(text: string, allowedAttributes: string[] = []) {
  return ReactHtmlParser(
    DOMPurify.sanitize(text, {
      ALLOWED_ATTR: allowedAttributes,
    })
  );
}
