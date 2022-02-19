export const RegisterValidation = {
    firstName: {
        required: true,
        maxLength: {
            value: 64,
            message: 'Too Many Characters',
        },
    },
    lastName: {
        required: true,
        maxLength: {
            value: 64,
            message: 'Too Many Characters',
        },
    },
    email: {
        required: 'Email is required',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        },
    },
    password: {
        required: 'Email is required',
        maxLength: {
            value: 64,
            message: 'Too Many Characters',
        },
        minLength: {
            value: 8,
            message: 'Too Less Characters',
        },
    },
}
