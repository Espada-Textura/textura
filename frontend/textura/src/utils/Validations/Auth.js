export const RegisterValidation = {
    firstName: {
        required: 'First name is required.',
        maxLength: {
            value: 64,
            message: 'First name is too many characters.',
        },
    },
    lastName: {
        required: 'Last name is required.',
        maxLength: {
            value: 64,
            message: 'Last name is too many characters.',
        },
    },
    email: {
        required: 'Email is required.',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Invalid email format.',
        },
    },
    password: {
        required: 'Password is required.',
        maxLength: {
            value: 64,
            message: 'Password is too many characters.',
        },
        minLength: {
            value: 8,
            message: 'Password is must be more than 8 characters.',
        },
    },
}

export const LoginValidation = {
    email: {
        required: 'Email is required.',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Invalid email format.',
        },
    },
    password: {
        required: 'Password is required.',
        maxLength: {
            value: 64,
            message: 'Password is too many characters.',
        },
        minLength: {
            value: 8,
            message: 'Password is must be more than 8 characters.',
        },
    },
}
