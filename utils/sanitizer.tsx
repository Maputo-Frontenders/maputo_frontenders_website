import DOMPurify from 'dompurify';

export const sanitizer = (content: string) => {
    const sanitizedHtml = DOMPurify.sanitize(content);

    return sanitizedHtml

}