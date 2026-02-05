/**
 * 
 *  The localStorage Object
    The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
    The data is stored with no expiration date, and will not be deleted when the browser is closed.
    The data will be available for days, weeks, and years.
 * 
 */

localtStorage.setItem("name", "John Doe");
console.log("Data : " + localStorage.getItem("name"));