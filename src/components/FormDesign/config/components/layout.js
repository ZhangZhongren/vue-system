const COL_CONFIG = (span) => ({
  span: span,
  offset: 0,
  push: 0,
  pull: 0
})
export default [
  {
    type: 'grid2',
    icon: 'icon-grid-',
    columns: [
      {
        ...COL_CONFIG(12),
        list: []
      },
      {
        ...COL_CONFIG(12),
        list: []
      }
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top'
    }
  },
  {
    type: 'grid4',
    icon: 'icon-grid-',
    columns: [
      {
        ...COL_CONFIG(6),
        list: []
      },
      {
        ...COL_CONFIG(6),
        list: []
      },
      {
        ...COL_CONFIG(6),
        list: []
      },
      {
        ...COL_CONFIG(6),
        list: []
      }
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top'
    }
  }
]
