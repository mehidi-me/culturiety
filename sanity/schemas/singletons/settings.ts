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
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
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
      name: 'footer',
      title: 'Footer Info',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
        }),
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
          initialValue: '© 2025 Second Order Science Foundation',
        }),
      ],
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
