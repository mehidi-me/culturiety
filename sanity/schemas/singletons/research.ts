import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Upload the background video for the research page.',
    }),
    defineField({
      name: 'heading',
      title: 'Page Heading',
      type: 'string',
      description: 'Main heading text for the research page.',
    }),
    defineField({
      name: 'booksSection',
      title: 'Books Section',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: "Title of the books section (e.g., 'Books').",
        }),
        defineField({
          name: 'books',
          title: 'Books',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {hotspot: true},
            },
          ],
          description: 'Upload images for the books displayed in this section.',
        }),
      ],
    }),
    defineField({
      name: 'articlesSection',
      title: 'Articles Section',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          description: "Title of the articles section (e.g., 'Articles').",
        }),
        defineField({
          name: 'articles',
          title: 'Articles',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Article Title',
                  type: 'string',
                  description: 'Title of the article.',
                }),
                defineField({
                  name: 'image',
                  title: 'Article Image',
                  type: 'image',
                  options: {hotspot: true},
                  description: 'Thumbnail image for the article.',
                }),
                defineField({
                  name: 'description',
                  title: 'Short Description',
                  type: 'string',
                  description: 'Brief summary of the article.',
                }),
                defineField({
                  name: 'button',
                  title: 'Button',
                  type: 'string',
                  initialValue: 'Read More',
                }),
                defineField({
                  name: 'buttonLink',
                  title: 'Button Link',
                  type: 'string',
                  initialValue: '#',
                }),
              ],
            },
          ],
          description: 'List of articles displayed in this section.',
        }),
      ],
    }),
  ],
})
