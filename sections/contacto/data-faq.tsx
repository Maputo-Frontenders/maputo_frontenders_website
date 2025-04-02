import { Locale } from "@/lib/getDictionary";

export const faqData = (lang: Locale) => {
  return lang === "pt" ? faqPT : faqEN;
};
const faqPT = [
  {
    question: "Como posso fazer parte da comunidade?",
    answer:
      "Você pode se juntar a nós participando de nossos eventos online ou presenciais, seguindo nossas redes sociais, e se inscrevendo nos grupos de comunicação que utilizamos, como WhatsApp, linkedin, e twitter. Todos são bem-vindos, independentemente do nível de experiência em programação!",
  },
  {
    question: "Posso partilhar um tema com a comunidade?",
    answer:
      "Com certeza! Valorizamos a troca de conhecimento e encorajamos todos os membros a compartilharem temas relevantes. Você pode sugerir seu tema nas redes sociais ou nos grupos de comunicação, e nossa equipe vai ajudar a integrar sua contribuição em um de nossos eventos ou discussões.",
  },
  {
    question: "Como posso ser speaker de um evento?",
    answer:
      "Se você tem um tema interessante e gostaria de ser palestrante, entre em contato conosco pelos nossos canais oficiais. Estamos sempre em busca de novas vozes para enriquecer nossos eventos com diferentes perspectivas e conhecimentos.",
  },
  {
    question: "Por que fazer parte da comunidade?",
    answer:
      "Ao fazer parte da nossa comunidade, você se conecta com desenvolvedores e entusiastas de tecnologia, acessa oportunidades de crescimento, participa de eventos exclusivos, recebe mentorias, e colabora diretamente para fortalecer o ecossistema tecnológico local.",
  },
  {
    question: "Só é possível encontrar temas técnicos na comunidade?",
    answer:
      "Não! Embora o foco principal seja o desenvolvimento de tecnologia e programação, também abordamos temas diversos, como soft skills, networking, inclusão, e até bem-estar. A ideia é construir uma comunidade abrangente que valorize o aprendizado em todas as áreas.",
  },
];
const faqEN = [
  {
    question: "How can I become a member of the community?",
    answer:
      "To become a member of the community, simply register on our website and follow the instructions. You will receive a welcome email and can participate in our activities.",
  },
];
