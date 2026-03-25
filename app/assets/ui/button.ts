export default {
    slots: {
        base: "rounded-4xl text-center items-center justify-center py-4",
    },
    variants: {
        size: {
            lg: {
                base: "py-4 sm:max-w-[250px] text-2xl"
            }
        },
    },
    compoundVariants: [
        {
            color: 'primary',
            variant: 'solid',
            class: 'text-white font-bold px-8 py-3'
        }
    ]
}