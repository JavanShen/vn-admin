interface Request<T> {
    url: string
    method: string
    data?: T
}

interface Response<T> {
    code: number
    msg?: string
    data: T
}

export type { Response, Request }
