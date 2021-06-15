import { Field } from 'formik'
import React from 'react'

import { string, object } from 'prop-types'


const CommonInputComponent = ({ name, component, label, placeholder, classes, ...rest }) => {
    return <Field id={name} className={classes} component={component} name={name} label={label} placeholder={placeholder} {...rest} />
}

CommonInputComponent.propTypes = {
    name : string,
    component : object,
    label : string,
    placeholder : string
}

export default CommonInputComponent