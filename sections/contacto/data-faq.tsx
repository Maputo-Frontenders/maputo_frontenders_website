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
      "You can join us by participating in our online or physical events, following our social media, and subscribing to the communication groups we use, such as WhatsApp, linkedin, and twitter. All are welcome, regardless of the level of experience in programming!",
  },
  {
    question: "Can I share a topic with the community?",
    answer:
      "Absolutely! We value knowledge exchange and encourage all members to share relevant topics. You can suggest your topic on social media or in the communication groups, and our team will help integrate your contribution into one of our events or discussions.",
  },
  {
    question: "How can I become a speaker for an event?",
    answer:
      "If you have an interesting topic and would like to be a speaker, contact us through our official channels. We are always looking for new voices to enrich our events with different perspectives and knowledge.",
  },
  {
    question: "Why join the community?",
    answer:
      "By joining our community, you connect with developers and technology enthusiasts, access growth opportunities, participate in exclusive events, receive mentorship, and directly contribute to strengthening the local technology ecosystem.",
  },
  {
    question: "Is it only possible to find technical topics in the community?",
    answer:
      "No! Although the main focus is on technology and programming development, we also cover various topics, such as soft skills, networking, inclusion, and even well-being. The idea is to build a comprehensive community that values learning in all areas.",
  },
];
