export const CreateArtValidation = {
    title: {
        required: 'Art title is required.',
        maxLength: {
            value: 256,
            message: 'Art title is too many characters.',
        },
    },
    description: {
        maxLength: {
            value: 256,
            message: 'Art description is too many characters.',
        },
    },
    tag: {
        maxLength: {
            value: 256,
            message: 'Art description is too many characters.',
        },
    },
    tool: {
        maxLength: {
            value: 256,
            message: 'Art description is too many characters.',
        },
    },
    image: {
        required: 'Art title is required.',
    },
}
