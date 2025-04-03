import {defineField} from 'sanity'

export const events = {
  name: 'events',
  type: 'document',
  title: 'Eventos',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Tipo de Evento',
      type: 'string',
      options: {
        list: [
          {title: 'Presencial', value: 'in-person'},
          {title: 'Virtual', value: 'virtual'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },

    defineField({
      name: 'image',
      type: 'image',
      title: 'Imagem',
      validation: (Rule: any) => Rule.required(),
    }),
    {
      name: 'tags',
      type: 'array',
      title: 'Etiquetas',
      of: [{type: 'string'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descrição',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      type: 'string',
      title: 'Localização',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Datas',
      type: 'object',
      fields: [
        {
          name: 'start',
          type: 'datetime',
          title: 'Data de Início',
          options: {dateFormat: 'DD/MM/YYYY', timeFormat: 'h:mm a', calendarTodayLabel: 'Hoje'},
        },
        {
          name: 'end',
          type: 'datetime',
          title: 'Data de Fim',
          options: {dateFormat: 'DD/MM/YYYY', timeFormat: 'h:mm a', calendarTodayLabel: 'Hoje'},
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'agendaImages',
      type: 'array',
      title: 'Imagens da Agenda',
      of: [{type: 'image'}],
    },
    {
      name: 'galleryLink',
      type: 'url',
      title: 'Link da Galeria',
    },
    {
      name: 'rsvpLink',
      type: 'url',
      title: 'Link de Inscrição',
    },
    {
      name: 'speakers',
      type: 'array',
      title: 'Oradores',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Nome',
            },
            {
              name: 'role',
              type: 'string',
              title: 'Função',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Fotografia',
            },
            {
              name: 'company',
              type: 'string',
              title: 'Empresa',
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
          ],
        },
      ],
    },
    {
      name: 'partners',
      type: 'array',
      title: 'Parceiros',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Nome',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Logotipo',
            },
            {
              name: 'link',
              type: 'url',
              title: 'Website',
            },
          ],
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
      title: 'title',
      subtitle: 'language',
      media: 'image',
    },
  },
}
