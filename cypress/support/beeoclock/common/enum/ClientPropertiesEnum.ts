require('dotenv').config();

export const ClientPropertiesEnum = {
    LOGIN: process.env.LOGIN,
    PASSWORD: process.env.PASSWORD
};

// console.log(process.env.LOGIN);
// console.log(process.env.PASSWORD);

// if (!ClientPropertiesEnum.LOGIN || !ClientPropertiesEnum.PASSWORD) {
//     throw new Error('Error: Missing LOGIN or PASSWORD in environment variables.');
// }


