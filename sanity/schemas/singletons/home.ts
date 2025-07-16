// import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'home',
//   title: 'Home',
//   type: 'document',
//   icon: HomeIcon,
//   // Uncomment below to have edits publish automatically as you type
//   // liveEdit: true,
//   fields: [
//     defineField({
//       name: 'heroSection',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'title',
//           title: 'Title',
//           type: 'string',
//           validation: (rule) => rule.required(),
//         }),
//         defineField({
//           name: 'overview',
//           title: 'Description',
//           type: 'string',
//         }),
//         defineField({
//           name: 'fadeImage',
//           title: 'Fade Image',
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//         }),
//         defineField({
//           name: 'button1',
//           type: 'object',
//           fields: [
//             defineField({
//               name: 'text',
//               type: 'string',
//             }),
//             defineField({
//               name: 'link',
//               type: 'string',
//             }),
//           ],
//         }),
//         defineField({
//           name: 'button2',
//           type: 'object',
//           fields: [
//             defineField({
//               name: 'text',
//               type: 'string',
//             }),
//             defineField({
//               name: 'link',
//               type: 'string',
//             }),
//           ],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'aboutSection',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'about1',
//           type: 'object',
//           fields: [
//             defineField({
//               name: 'title',
//               type: 'string',
//             }),
//             defineField({
//               name: 'description',
//               type: 'text',
//             }),
//           ],
//         }),
//         defineField({
//           name: 'about2',
//           type: 'object',
//           fields: [
//             defineField({
//               name: 'title',
//               type: 'string',
//             }),
//             defineField({
//               name: 'description',
//               type: 'text',
//             }),
//             defineField({
//               name: 'image',
//               type: 'image',
//               options: {
//                 hotspot: true,
//               },
//             }),
//           ],
//         }),
//         defineField({
//           name: 'about3',
//           type: 'object',
//           fields: [
//             defineField({
//               name: 'image',
//               title: 'Video Image',
//               type: 'image',
//               options: {
//                 hotspot: true,
//               },
//             }),
//             defineField({
//               name: 'videoLink',
//               type: 'string',
//             }),
//             defineField({
//               name: 'keyPoints',
//               type: 'array',
//               of: [
//                 {
//                   type: 'text',
//                 },
//               ],
//             }),
//           ],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'experienceSection',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'tagline',
//           type: 'string',
//         }),
//         defineField({
//           name: 'title',
//           type: 'string',
//         }),
//         defineField({
//           name: 'description',
//           type: 'text',
//         }),
//         defineField({
//           name: 'heading',
//           type: 'string',
//         }),
//         defineField({
//           name: 'experience',
//           type: 'array',
//           of: [
//             {
//               type: 'object',
//               fields: [
//                 defineField({
//                   name: 'title',
//                   type: 'string',
//                 }),
//                 defineField({
//                   name: 'description',
//                   type: 'text',
//                 }),
//                 defineField({
//                   name: 'duration',
//                   title: 'Duration',
//                   type: 'duration',
//                 }),
//                 defineField({
//                   name: 'tagline',
//                   type: 'string',
//                 }),
//               ],
//             },
//           ],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'servicesSection',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'tagline',
//           type: 'string',
//         }),
//         defineField({
//           name: 'title',
//           type: 'string',
//         }),
//         defineField({
//           name: 'fadeImage',
//           title: 'Fade Image',
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//         }),
//         defineField({
//           name: 'services',
//           type: 'array',
//           of: [
//             {
//               type: 'object',
//               fields: [
//                 defineField({
//                   name: 'title',
//                   type: 'string',
//                 }),
//                 defineField({
//                   name: 'description',
//                   type: 'array',
//                   of: [
//                     defineArrayMember({
//                       type: 'block',
//                       marks: {
//                         annotations: [
//                           {
//                             name: 'link',
//                             type: 'object',
//                             title: 'Link',
//                             fields: [
//                               {
//                                 name: 'href',
//                                 type: 'url',
//                                 title: 'Url',
//                               },
//                             ],
//                           },
//                         ],
//                       },
//                       styles: [],
//                     }),
//                   ],
//                 }),
//               ],
//             },
//           ],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'portfolioSection',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'tagline',
//           type: 'string',
//         }),
//         defineField({
//           name: 'title',
//           type: 'string',
//         }),
//         defineField({
//           name: 'portfolios',
//           type: 'array',
//           of: [
//             defineArrayMember({
//               type: 'reference',
//               to: [{type: 'portfolio'}],
//             }),
//           ],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'keyIdeaSection',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'tagline',
//           type: 'string',
//         }),
//         defineField({
//           name: 'title',
//           type: 'string',
//         }),
//         defineField({
//           name: 'keyIdeas',
//           type: 'array',
//           of: [
//             {
//               type: 'object',
//               fields: [
//                 defineField({
//                   name: 'description',
//                   type: 'text',
//                 }),
//               ],
//             },
//           ],
//         }),
//       ],
//     }),
//     defineField({
//       name: 'contactSection',
//       type: 'object',
//       fields: [
//         defineField({
//           name: 'tagline',
//           type: 'string',
//         }),
//         defineField({
//           name: 'title',
//           type: 'string',
//         }),
//         defineField({
//           name: 'fadeImage',
//           title: 'Fade Image',
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//         }),
//         defineField({
//           name: 'buttonText',
//           type: 'string',
//         }),
//       ],
//     }),

//   ],
// preview: {
//   select: {
//     title: 'title',
//   },
//   prepare({title}) {
//     return {
//       subtitle: 'Home',
//       title,
//     }
//   },
// },
// })
export default defineType({
  name: 'Home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      type: 'object',
      title: 'Hero Section',
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
          name: 'headline',
          title: 'Headline',
          type: 'string',
        }),
        defineField({
          name: 'subContent',
          title: 'Sub Content',
          type: 'object',
          fields: [
            defineField({
              name: 'subHeading',
              title: 'Sub Heading',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
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
      ],
    }),
    defineField({
      name: 'aiResearchSection',
      title: 'AI Research Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'imageStack',
          title: 'Image Stack',
          type: 'array',
          of: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
        // defineField({
        //   name: 'cards',
        //   title: 'Grid Cards',
        //   type: 'array',
        //   of: [
        //     defineField({
        //       name: 'card',
        //       title: 'Card',
        //       type: 'object',
        //       fields: [
        //         defineField({
        //           name: 'heading',
        //           title: 'Heading',
        //           type: 'string',
        //         }),
        //         defineField({
        //           name: 'description',
        //           title: 'Description',
        //           type: 'text',
        //         }),
        //         defineField({
        //           name: 'buttonLabel',
        //           title: 'Button Label',
        //           type: 'string',
        //           initialValue: 'More info',
        //         }),
        //       ],
        //     }),
        //   ],
        //   description: 'Cards with information and buttons',
        // }),
      ],
    }),
    defineField({
      name: 'aiResearchCards',
      title: 'AI Research Cards',
      type: 'document',
      fields: [
        defineField({
          name: 'cards',
          title: 'Grid Cards',
          type: 'array',
          of: [
            defineField({
              name: 'card',
              title: 'Card',
              type: 'object',
              fields: [
                defineField({
                  name: 'heading',
                  title: 'Heading',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'buttonLabel',
                  title: 'Button Label',
                  type: 'string',
                  initialValue: 'More info',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'perilsOfSloppyScience',
      title: 'Perils of Sloppy Science',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'The Perils of Sloppy Science',
        }),
        defineField({
          name: 'cards',
          title: 'Content Cards',
          type: 'array',
          of: [
            defineField({
              name: 'card',
              title: 'Card',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                }),
                defineField({
                  name: 'heading',
                  title: 'Heading',
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
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sharingTheKnowledge',
      title: 'Sharing the Knowledge',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Sharing the Knowledge',
        }),
        defineField({
          name: 'cards',
          title: 'Knowledge Cards',
          type: 'array',
          of: [
            defineField({
              name: 'card',
              title: 'Card',
              type: 'object',
              fields: [
                defineField({
                  name: 'heading',
                  title: 'Heading',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                  initialValue: 'More info',
                }),
              ],
            }),
          ],
        }),
      ],
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
