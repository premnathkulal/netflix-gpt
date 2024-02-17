export interface UserValues {
    name: string;
    email: string;
    password: string;
}

interface FormValues {
    value: string;
    error: string;
}

export interface AuthForm {
    name: FormValues;
    email: FormValues;
    password: FormValues;
}

const validateForm = (userValues: UserValues): [AuthForm, boolean] => {
    const emailErrorMsg = validateEmail(userValues.email);
    const passwordErorMessage = validatePassword(userValues.password);

    return [
        {
            name: {
                value: userValues.name,
                error: '',
            },
            email: {
                value: userValues.email,
                error: emailErrorMsg,
            },
            password: {
                value: userValues.password,
                error: passwordErorMessage,
            },
        },
        !(emailErrorMsg || passwordErorMessage),
    ];
};

const validateEmail = (email: string): string => {
    const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    return !isEmailValid ? 'Email is not valid' : '';
};

const validatePassword = (password: string) => {
    const isPasswordValid =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            password
        );
    return !isPasswordValid ? 'Password is not valid' : '';
};

export { validateForm };
