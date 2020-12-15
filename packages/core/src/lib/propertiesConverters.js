import isFunction from 'lodash/isFunction'
import get from 'lodash/get'
import { format } from 'd3-format'

export const getLabelGenerator = (_label, labelFormat) => {
    const getRawLabel = isFunction(_label) ? _label : d => get(d, _label)
    let formatter
    if (labelFormat) {
        formatter = isFunction(labelFormat) ? labelFormat : format(labelFormat)
    }

    if (formatter) return d => formatter(getRawLabel(d))
    return getRawLabel
}

export const getAccessorFor = directive =>
    isFunction(directive) ? directive : d => get(d, directive)

export const getAccessorOrValue = value => (isFunction(value) ? value : () => value)
