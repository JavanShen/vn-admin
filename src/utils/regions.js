export async function getRegionsData() {
    try {
        const { province } = await import(/* webpackChunkName: "regions" */ '@/data/regions/province.js');
        const { city } = await import(/* webpackChunkName: "regions" */ '@/data/regions/city.js');
        const { county } = await import(/* webpackChunkName: "regions" */ '@/data/regions/county.js');

        return province.map(p => {
            p.children = city[p.id].map(c => {
                if(county[c.id]) {
                    c.children = county[c.id].map(co => {
                        co.isLeaf=true
                        return co
                    });
                }else {
                    c.isLeaf=true
                }
                return c
            })
            return p
        })
    } catch (error) {
        console.log(error);
    }
}