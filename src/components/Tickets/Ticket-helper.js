export const convertDate = (dateToConvert) => {   
    const date = new Date(dateToConvert);
    const year = date.getFullYear();
    const month = ('00' + (date.getMonth() + 1)).slice(-2);
    const day = ('00' + date.getDate()).slice(-2);

    return `${day}.${month}.${year}`;
}

export const convertTime = (dateToConvert) => {
    const date = new Date(dateToConvert);
    const hour = ('00' + date.getHours()).slice(-2);
    const minute = ('00' + date.getMinutes()).slice(-2);

    return `${hour}:${minute}`;
}

export const convertDuration = (durationToConvert) => {
    const durationHours = Math.trunc(durationToConvert / 60);
    const durationMinutes = durationToConvert % 60;

    return `${durationHours}ч ${durationMinutes}м`;
}

export const convertPrice = (priceToConvert) => {
    return priceToConvert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

