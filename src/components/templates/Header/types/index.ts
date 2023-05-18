export const NavigationEnum = {
    Company: 'company',
    Service: 'service',
    Contact: 'contact'
} as const

export type NavigationType = typeof NavigationEnum[keyof typeof NavigationEnum]
