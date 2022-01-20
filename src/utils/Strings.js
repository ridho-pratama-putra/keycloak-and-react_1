export const capitalFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const equalsIgnoreCase=(source, destination)=> {
    return source.toUpperCase() === destination.toUpperCase();
}
