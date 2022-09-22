import cloneDeep from 'lodash/cloneDeep'
import type { Item, CityItem, CountyItem } from '@/interface/data/regions'

interface CloneCountyItem extends CountyItem {
    isLeaf?: boolean
}

interface CloneCityItem extends CityItem {
    children?: CloneCountyItem[]
    isLeaf?: boolean
}

interface CloneProvinceItem extends Item {
    children?: CloneCityItem[]
}

export default async function getRegionsData() {
    try {
        const { default: province } = await import(
            /* webpackChunkName: "regions" */ '@/data/regions/province.js'
        )
        const { default: city } = await import(
            /* webpackChunkName: "regions" */ '@/data/regions/city.js'
        )
        const { default: county } = await import(
            /* webpackChunkName: "regions" */ '@/data/regions/county.js'
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
