/**
 * This function obtains current DateTime
 * @returns {number} Date Time
 */

export const dateTime = () => {
    let today = new Date()
    let date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear()
       
    return date;
}