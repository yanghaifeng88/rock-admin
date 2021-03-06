import _ from 'lodash'
import { isBool } from '../../utils'
import VSelect from './VSelect'
import VRadio from './VRadio'
import VCheckbox from './VChecbox'
import VNumberRange from './VNumberRange'
import VJson from './VJson'
import VIconSelect from './VIconSelect'
import VSubForm from './VSubForm'
import VUpload from './VUpload'
import VInput from './VInput'

export const componentMap = {
  input: 'v-input',
  number: 'el-input-number',
  radio: 'v-radio',
  checkbox: 'v-checkbox',
  'number-range': 'v-number-range',
  date: 'el-date-picker',
  time: 'el-time-picker',
  datetime: 'el-date-picker',
  slider: 'el-slider',
  upload: 'v-upload',
  transfer: 'el-transfer',
  color: 'el-color-picker',
  rate: 'el-rate',
  select: 'v-select',
  switch: 'el-switch',
  json: 'v-json',
  'icon-select': 'v-icon-select',
  'sub-form': 'v-sub-form'
}

export const formOptions = {
  inline: false,
  labelPosition: 'right',
  labelWidth: '100px',
  submitButton: {
    show: true,
    type: 'primary',
    text: '提交'
  },
  cancelButton: {
    show: true,
    type: 'info',
    text: '取消'
  }
}

export function makeFormOptions(options) {
  options = options || {}
  if (isBool(options.submitButton)) {
    options.submitButton = { show: options.submitButton }
  }

  if (isBool(options.cancelButton)) {
    options.cancelButton = { show: options.cancelButton }
  }

  return _.merge({}, formOptions, options)
}

export const customFormCtrl = { VSelect, VRadio, VCheckbox, VNumberRange, VJson, VIconSelect, VSubForm, VUpload, VInput }

export const getComponentName = (name) => {
  if (componentMap[name] !== undefined) {
    return componentMap[name]
  }
  if (componentMap['v-' + name] !== undefined) {
    return componentMap['v-' + name]
  }
  return name
}

export const getComponentProps = (item) => {
  const props = item.props || {}
  if (item.options) {
    props.options = item.options
  }
  if (item.type === 'upload') {
    item.props.action = `${process.env.VUE_APP_BASE_API}/upload` // upload action
  }
  return props
}
