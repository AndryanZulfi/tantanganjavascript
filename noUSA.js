function telephoneCheck(phone) {
    // Regular expression to validate a US phone number
    const pattern = /^(1\s?)?(\(\d{3}\)[\s\-]?|\d{3}[\s\-]?)\d{3}[\s\-]?\d{4}$/;
    
    // Check if the phone number matches the pattern
    return pattern.test(phone);
}