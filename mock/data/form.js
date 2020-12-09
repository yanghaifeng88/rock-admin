export const simpleForm = {
  submitApi: '/save',
  options: {
    column: 3,
    submitButton: {
      text: '提交'
    },
    cancelButton: {
      text: '取消',
      on: {
        click: '() => console.error(33333333)'
      }
    }
  },
  formItems: [
    {
      type: 'radio',
      field: 'radio',
      label: '单选框',
      info:
        '表单控件支持提示信息, 可写html <a class="el-link el-link--primary is-underline" target="_blank" href="http://github.com/daodao97">文档</a>',
      options: [
        {
          value: 1,
          label: '选项1'
        },
        {
          value: 2,
          label: '选项2'
        }
      ],
      value: 1,
      col: {
        span: 12
      }
    },
    {
      type: 'input',
      field: 'input',
      label: '输入框',
      value: 5,
      props: {
        maxlength: 10,
        suffixIcon: 'el-icon-date',
        slots: {
          prepend: '前缀'
        },
        showCopy: true,
        prefixIcon: 'el-icon-search'
      },
      rules: [{ required: true, message: '该项为必填项' }],
      depend: {
        field: 'radio',
        value: 1
      },
      info: '当前控件依赖 单选框 的值, 仅在 选项1 下显示',
      col: {
        span: 12
      }
    },
    {
      type: 'number',
      field: 'number',
      label: '数字',
      props: {
        step: 2
      },
      computed: {
        // when: ["$self", ">", 10],
        // when: [">", 3],
        when: 4,
        set: {
          range_number: {
            label: '数字区间2'
          }
        }
      },
      col: {
        span: 12
      },
      value: 4
    },
    {
      type: 'number-range',
      field: 'range_number',
      label: '数字区间',
      col: {
        span: 12
      }
    },
    {
      type: 'checkbox',
      field: 'checkbox',
      label: '复选框',
      value: [],
      options: [
        { value: 1, label: '复选框1' },
        { value: 2, label: '复选框2' },
        { value: 3, label: '复选框3' }
      ],
      computed: [
        {
          when: ['number', '<=', 10],
          set: [1]
        },
        {
          when: ['number', '>', 10],
          set: [2, 3]
        }
      ],
      info:
        '动态计算, 当 数字 字段的值 <= 10 时, 复选框1将被选中, > 10 时, 复选框2,3 将被选中',
      col: {
        span: 8
      }
    },
    {
      type: 'date',
      field: 'date',
      label: '日期',
      props: {
        disabled: true
      },
      info: '禁用控件',
      col: {
        span: 8
      }
    },
    {
      type: 'date',
      field: 'date_range',
      label: '日期范围',
      value: '',
      props: {
        type: 'daterange',
        rangeSeparator: '~',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期'
      },
      col: {
        span: 8
      }
    },
    {
      type: 'time',
      field: 'time',
      label: '时间'
    },
    {
      type: 'time',
      field: 'time_range',
      label: '时间范围',
      props: {
        range: true
      }
    },
    {
      type: 'datetime',
      field: 'datetime',
      label: '日期时间'
    },
    {
      type: 'datetime',
      field: 'datetime_range',
      label: '日期时间范围',
      props: {
        range: true
      }
    },
    {
      type: 'select',
      field: 'select',
      label: '下拉框',
      options: [
        { value: 1, label: '选项1' },
        { value: 2, label: '选项2' },
        { value: 3, label: '选项3' },
        { value: 4, label: '选项4' }
      ],
      props: {
        selectApi: '/user/select'
      }
    },
    {
      type: 'switch',
      field: 'switch',
      label: '开关'
    },
    {
      type: 'slider',
      field: 'slider',
      label: '滑块'
    },
    {
      type: 'upload',
      field: 'upload',
      label: '上传',
      value: 'http://qupinapptest.oss-cn-beijing.aliyuncs.com/1/202002/d81d3c9dc7c3df7590d333f783a97995.jpeg',
      props: {}
    },
    {
      type: 'upload',
      field: 'upload_multiple',
      label: '上传多张',
      props: {
        limit: 3
      }
    },
    {
      type: 'transfer',
      field: 'transfer',
      label: '穿梭框',
      options: [
        { value: 1, label: '备选项1' },
        { value: 2, label: '备选项2' },
        { value: 3, label: '备选项3' }
      ],
      value: []
    },
    {
      type: 'color',
      field: 'color',
      label: '颜色'
    },
    {
      type: 'rate',
      field: 'rate',
      label: '评分',
      value: 3
    },
    {
      type: 'sub-form',
      field: 'sub_form',
      label: '多项子表单',
      props: {
        repeat: true,
        formItems: [
          {
            type: 'input',
            field: 'sub_input',
            label: '输入框',
            rules: [
              {
                required: true,
                message: '子表单的校验将在上层表单校验通过后执行'
              }
            ],
            info: 'input 输入框支持 mask',
            props: {
              mask: '99-9999999'
            }
          },
          {
            type: 'input',
            field: 'sub_input_1',
            label: '输入框1'
          }
        ]
      }
    },
    {
      type: 'sub-form',
      field: 'sub_form_not_repeat',
      label: '子表单',
      props: {
        options: {
          inline: true
        },
        formItems: [
          {
            type: 'input',
            field: 'sub_input',
            label: '输入框',
            rules: [
              {
                required: true,
                message: '子表单的校验将在上层表单校验通过后执行'
              }
            ]
          },
          {
            type: 'input',
            field: 'sub_input_1',
            label: '输入框1'
          }
        ]
      }
    },
    {
      type: 'icon-select',
      field: 'icon',
      label: '图标'
    },
    {
      type: 'template',
      field: 'p3',
      label: '自定义',
      comp: {
        inject: ['formData'],
        template: '<div>{{ msg }}<br/>当前的表单数据是:<pre>{{JSON.stringify(formData, null, 2)}}</pre><el-button @click="onclick">click</el-button></div>',
        data: {
          msg: 'this is custom data'
        },
        methods: {
          onclick: '() => { console.log(this)}'
        }
      },
      info: '在通用表单控件无法满足需求时, 可以编写 `template` 模板组件'
    }
  ]
}