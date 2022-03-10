export const CreateArtValidation = {
    title: {
        required: 'Art title is required.',
        maxLength: {
            value: 2,
            message: 'Art title is too many characters.',
        },
    },
    description: {
        required: 'Art title is required.',
        maxLength: {
            value: 256,
            message: 'Art description is too many characters.',
        },
    },
    tag: {
        required: 'Art title is required.',
        maxLength: {
            value: 256,
            message: 'Art description is too many characters.',
        },
    },
    tool: {
        required: 'Art title is required.',
        maxLength: {
            value: 256,
            message: 'Art description is too many characters.',
        },
    },
    image: {
        required: 'Art title is required.',
    },
}
