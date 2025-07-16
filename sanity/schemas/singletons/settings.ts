import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Footer Menu Item list',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'favicon',
      type: 'image',
    }),
    // defineField({
    //   name: 'menuMainButton',
    //   title: 'Menu Main Button',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'title',
    //       title: 'Title',
    //       type: 'string',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       name: 'link',
    //       title: 'Link',
    //       type: 'string',
    //       validation: (Rule) => Rule.required(),
    //     },
    //   ],
    // }),
    // defineField({
    //   name: 'socialLink',
    //   title: 'Social Link',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'facebook',
    //       type: 'url',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       name: 'instagram',
    //       type: 'url',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       name: 'linkedin',
    //       type: 'url',
    //       validation: (Rule) => Rule.required(),
    //     },
    //   ],
    // }),
   
      
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            defineField({
              name: 'socialLink',
              title: 'Social Link',
              type: 'object',
              fields: [
                defineField({
          name: 'platform',
          title: 'Platform',
          type: 'string',
          options: {
            list: [
              { title: 'Facebook', value: 'facebook' },
              { title: 'Instagram', value: 'instagram' },
              { title: 'LinkedIn', value: 'linkedin' },
            ],
            layout: 'dropdown',
          },
          validation: (Rule) => Rule.required(),
        }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'copyright',
          title: 'Copyright Text',
          type: 'string',
          initialValue: '©2025 Culturiety. All rights reserved.',
        }),
        defineField({
          name: 'footerlogotext',
          title: 'Footer Logo Text',
          type: 'string',
          initialValue: 'Culturiety',
        }),
      
    // defineField({
    //   name: 'adminEmail',
    //   title: 'Admin Email',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'favicon',
    //   type: 'image',
    // }),

    defineField({
      title: 'Seo',
      name: 'seo',
      type: 'seoMetaFields',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
        subtitle: 'Menu Items, Footer Info, and Open Graph Image',
      }
    },
  },
})
