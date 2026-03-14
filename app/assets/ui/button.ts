export default {
    slots: {
        base: "rounded-4xl text-center items-center justify-center py-4",
    },
    variants: {
        size: {
            lg: {
                base: "py-3 max-w-[250px]"
            }
        },
    },
    compoundVariants: [
        {
            color: 'primary',
            variant: 'solid',
            class: 'text-white font-bold'
        }
    ]
}