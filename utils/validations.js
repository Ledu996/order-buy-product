

exports.nameValidation = (name) => {
    const regex = /^[a-zA-z]{3,32}$/;
    return regex.test(name);
}

exports.emailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

exports.phoneValidation = (phone) => {
    const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{3,4}$/;
    return regex.test(phone);
}

exports.passwordValidation = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password);
}