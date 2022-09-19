interface Item {
    id: string
    name: string
}

interface CityItem extends Item {
    province: string
}

interface CountyItem extends Item {
    city: string
}

type Province = Item[]

type City = {
    [key: string]: CityItem[]
}

type County = {
    [key: string]: CountyItem[]
}

export type { Province, City, County, Item, CityItem, CountyItem }
