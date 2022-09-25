import type { Item, CityItem, CountyItem } from '@/interface/data/regions'

interface PickerCountyItem extends CountyItem {
    isLeaf?: boolean
}

interface PickerCityItem extends CityItem {
    children?: PickerCountyItem[]
    isLeaf?: boolean
}

interface PickerProvinceItem extends Item {
    children?: PickerCityItem[]
}

export type { PickerCityItem, PickerCountyItem, PickerProvinceItem }
