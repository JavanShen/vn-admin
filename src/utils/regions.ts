import cloneDeep from 'lodash/cloneDeep'
import type { ProvinceItem, CityItem, CountyItem } from 'china-region-data'

interface CloneCountyItem extends CountyItem {
    isLeaf?: boolean
}

interface CloneCityItem extends CityItem {
    children?: CloneCountyItem[]
    isLeaf?: boolean
}

interface CloneProvinceItem extends ProvinceItem {
    children?: CloneCityItem[]
}

export default async function getRegionsPickerData() {
    try {
        const { province, city, county } = await import(
            /* webpackChunkName: "regions" */ 'china-region-data'
        )

        const provinceClone: CloneProvinceItem[] = cloneDeep(province)
        const cityClone: Record<string, CloneCityItem[]> = cloneDeep(city)
        const countyClone: Record<string, CloneCountyItem[]> = cloneDeep(county)

        return provinceClone.map(p => {
            p.children = cityClone[p.id].map(c => {
                if (countyClone[c.id]) {
                    c.children = countyClone[c.id].map(co => {
                        co.isLeaf = true
                        return co
                    })
                } else {
                    c.isLeaf = true
                }
                return c
            })
            return p
        })
    } catch (error) {
        return undefined
    }
}
