export const gradientButton = () => ({
    root: ({ chubby }) => ({
        minWidth: 200,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        background:'linear-gradient(to top, #134e5a, #71b285)',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        ...(chubby && {
            borderRadius: 50,
        }),
    }),
    label: {
        color: 'white',
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 700,
    },
    contained: {
        minHeight: 30,
        //   boxShadow: shadows[0],
        '&:active': {
            // boxShadow: shadows[0],
        },
    },
});