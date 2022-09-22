interface LoginInfo {
    username: string
    password: string
}

type Role = 'admin' | 'editor' | 'user' | 'guest'

interface UserInfo {
    name: string
    avatar: string
    email: string
    phone: string
    address: string
    introduction: string
    roles: Role[]
}

export { LoginInfo, UserInfo, Role }
