export default [
  {
    type: 'input',
    icon: 'icon-input',
    options: {
      defaultValue: '',
      type: 'input',
      autocomplete: 'off',
      dataType: 'string',
      name: '',
      'prefix-icon': '',
      'suffix-icon': '',
      pattern: '',
      placeholder: '',
      maxlength: Infinity,
      minlength: 0,
      clearable: true,
      readonly: false,
      autofocus: false,
      required: false,
      disabled: false,
      'validate-event': true,
      'show-password': false
    }
  },
  {
    type: 'textarea',
    icon: 'icon-diy-com-textarea',
    options: {
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: ''
    }
  },
  {
    type: 'number',
    icon: 'icon-number',
    options: {
      width: '',
      required: false,
      defaultValue: 0,
      min: '',
      max: '',
      step: 1,
      disabled: false,
      controlsPosition: ''
    }
  },
  {
    type: 'radio',
    icon: 'icon-radio-active',
    options: {
      inline: false,
      defaultValue: '',
      showLabel: false,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      disabled: false,
    }
  },
  {
    type: 'checkbox',
    icon: 'icon-check-box',
    options: {
      inline: false,
      defaultValue: [],
      showLabel: false,
      options: [
        {
          value: 'Option 1'
        },
        {
          value: 'Option 2'
        },
        {
          value: 'Option 3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      disabled: false,
    }
  },
  {
    type: 'time',
    icon: 'icon-time',
    options: {
      defaultValue: '21:19:56',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: true,
      format: 'HH:mm:ss',
      required: false,
      width: '',
    }
  },
  {
    type: 'date',
    icon: 'icon-date',
    options: {
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'date',
      format: 'yyyy-MM-dd',
      timestamp: false,
      required: false,
      width: '',
    }
  },
  {
    type: 'rate',
    icon: 'icon-pingfen1',
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false
    }
  },
  {
    type: 'color',
    icon: 'icon-color',
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false
    }
  },
  {
    type: 'select',
    icon: 'icon-select',
    options: {
      defaultValue: '',
      multiple: false,
      disabled: false,
      clearable: false,
      placeholder: '',
      required: false,
      showLabel: false,
      width: '',
      options: [
        {
          value: 'Option 1'
        },
        {
          value: 'Option 2'
        }, {
          value: 'Option 3'
        }
      ],
      remote: false,
      filterable: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
    }
  },
  {
    type: 'switch',
    icon: 'icon-switch',
    options: {
      defaultValue: false,
      required: false,
      disabled: false,
    }
  },
  {
    type: 'slider',
    icon: 'icon-slider',
    options: {
      defaultValue: 0,
      disabled: false,
      required: false,
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      range: false,
      width: ''
    }
  },
  {
    type: 'text',
    icon: 'icon-wenzishezhi-',
    options: {
      defaultValue: 'This is a text',
      customClass: '',
    }
  }
]
