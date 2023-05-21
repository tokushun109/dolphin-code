import { NavigationType } from '@/components/containers/Header/types'
import Router from 'next/router'

export const scrollToNavigationId = (id: NavigationType) => {
    Router.push(`/#${id}`)
}
