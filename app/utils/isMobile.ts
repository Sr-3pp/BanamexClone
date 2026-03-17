const breakpoints = useBreakpoints({
  mobile: 640,
  tablet: 1024,
})

// Returns true if screen is smaller than 640px
const isMobile = breakpoints.smaller('mobile') 

export default isMobile