type Province = { id: string; name: string }[]

type City = {
    [key: string]: {
        id: string
        province: string
        name: string
    }[]
}

type County = {
    [key: string]: {
        id: string
        city: string
        name: string
    }[]
}

export { Province, City, County }
