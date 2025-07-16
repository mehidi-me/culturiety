import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectsSection',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'projectsGrid',
      title: 'Projects Grid Section',
      type: 'document',
      fields: [
        defineField({
          name: 'projects',
          title: 'Projects',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Project Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({
                  name: 'title',
                  title: 'Project Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Project Description',
                  type: 'text',
                }),
                defineField({
                  name: 'link',
                  type: 'string',
                }),
              ],
            },
          ],
          description: 'List of projects displayed in a grid.',
        }),
      ],
    }),
  ],
})
