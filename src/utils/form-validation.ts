export interface UserValues {
    name: string
    email: string
    password: string
}

const validateForm = (userValues: UserValues) => {
    return {
        name: {
            value: userValues.name,
            error: ''
        },
        email: {
            value: userValues.email,
            error: validateEmail(userValues.email)
        },
        password: {
            value: userValues.password,
            error: validatePassword(userValues.password)
        }
    }
}

const validateEmail = (email: string): string => {
    const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
    return !isEmailValid?'Email is not valid':''
}

const validatePassword = (password: string) => {
    const isPasswordValid =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    return !isPasswordValid?'Password is not valid':''
}

export {
    validateForm,
}