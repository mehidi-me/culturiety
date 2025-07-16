import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
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
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'object',
      fields: [
        defineField({
          name: 'learnMore',
          title: 'Learn More Button',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              initialValue: 'Learn more',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              initialValue: '/about',
            }),
          ],
        }),
        defineField({
          name: 'projects',
          title: 'Projects Button',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              initialValue: 'Projects',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              initialValue: '/projects',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'aboutAdditionalSection',
      title: 'About Page Additional Section',
      type: 'document',
      fields: [
        defineField({
          name: 'content',
          title: 'Section Content',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Main text content for the section with rich text formatting support.',
        }),
      ],
    }),
    defineField({
      name: 'teamSection',
      title: 'Team Section',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'teamMembers',
          title: 'Team Members',
          type: 'array',
          of: [
            defineField({
              name: 'teamMember',
              title: 'Team Member',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'role',
                  title: 'Role',
                  type: 'string',
                }),
                defineField({
                  name: 'socialLinks',
                  title: 'Social Links',
                  type: 'array',
                  of: [
                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'platform',
                          title: 'Platform',
                          type: 'string',
                          options: {
                            list: ['Facebook', 'LinkedIn', 'Website'],
                          },
                        }),
                        defineField({
                          name: 'url',
                          title: 'URL',
                          type: 'url',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ourFocus',
      title: 'Our Focus Section',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'focusItems',
          title: 'Focus Items',
          type: 'array',
          of: [
            defineField({
              name: 'focusItem',
              title: 'Focus Item',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({
                  name: 'title',
                  title: 'Focus Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'link',
                  title: 'Learn More Link',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
