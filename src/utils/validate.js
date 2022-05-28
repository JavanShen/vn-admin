export const isExternal = (path) => {
    return /^(https?:|mailto:|tel:)/.test(path);
}

export const isEmail = (email) => {
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email);
}

export const isPhone = (phone) => {
    return /^1[3456789]\d{9}$/.test(phone);
}