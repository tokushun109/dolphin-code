export const NavigationEnum = {
    About: 'about',
    Service: 'service',
    Company: 'company',
    Contact: 'contact',
} as const

export type NavigationType =
    (typeof NavigationEnum)[keyof typeof NavigationEnum]
