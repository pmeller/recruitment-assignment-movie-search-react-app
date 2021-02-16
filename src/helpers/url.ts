import { stringify } from 'querystring'

export const createQueryString = (params: Record<string, string | number | undefined>): string => stringify(params)
