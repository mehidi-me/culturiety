// import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Home Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Home Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle2',
      title: 'Home Sub Title Two',
      type: 'string',
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
        subtitle: 'Home',
        title,
      }
    },
  },
})
