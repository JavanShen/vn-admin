export function isExternal(path: string) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

export function isEmail(email: string) {
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)
}

export function isPhone(phone: string) {
    return /^1[3456789]\d{9}$/.test(phone)
}

export function typeOf(obj: unknown) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

interface Obj {
    [key: string]: unknown
}
export function isSameObject(obj1: Obj, obj2: Obj, isStrict = false) {
    if (isStrict) {
        return JSON.stringify(obj1) === JSON.stringify(obj2)
    }
    const isSame = (obj: Obj) => {
        const keys = Object.keys(obj)
        for (let i = 0, len = keys.length; i < len; i++) {
            const key = keys[i]
            if (typeOf(obj[key]) === 'object') {
                if (!isSame(obj[key] as Obj)) {
                    return false
                }
            } else if (obj[key] !== obj2[key]) {
                return false
            }
        }
        return true
    }

    return isSame(obj1)
}

export function isIntersect(arr1 = [], arr2 = []) {
    const map = new Map()

    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i], true)
    }

    for (let j = 0; j < arr2.length; j++) {
        if (map.has(arr2[j])) {
            return true
        }
    }
    return false
}
