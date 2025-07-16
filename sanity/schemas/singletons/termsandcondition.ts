// import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Terms',
  title: 'Terms And Conditions',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Terms Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Main text content for the section with rich text formatting support.',
    }),
    defineField({
      name: 'bottomimage',
      title: 'Bottom Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        subtitle: 'Terms',
        title,
      }
    },
  },
})
