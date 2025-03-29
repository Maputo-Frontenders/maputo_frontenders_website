import {defineField} from 'sanity'

export const members = {
  name: 'members',
  type: 'document',
  title: 'Membros',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Função',
      validation: (Rule: any) => Rule.required(),
    },
    defineField({
      name: 'image',
      type: 'image',
      title: 'Fotografia',
      validation: (Rule: any) => Rule.required(),
    }),
    {
      name: 'roleColor',
      type: 'string',
      title: 'Cor da Função (Hex)',
      description: 'Código de cor em hexadecimal (ex: #ff9f24)',
      validation: (Rule: any) =>
        Rule.required()
          .regex(/^#[0-9A-Fa-f]{6}$/, {
            name: 'hex color',
            invert: false,
          })
          .error('Deve ser um código de cor hexadecimal válido (ex: #ff9f24)'),
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Biografia',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'social',
      type: 'object',
      title: 'Redes Sociais',
      fields: [
        {
          name: 'twitter',
          type: 'url',
          title: 'Twitter',
        },
        {
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn',
        },
        {
          name: 'github',
          type: 'url',
          title: 'GitHub',
        },
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram',
        },
      ],
    },
    defineField({
      name: 'language',
      type: 'string',
      initialValue: 'id',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'language',
      media: 'image',
    },
  },
}
