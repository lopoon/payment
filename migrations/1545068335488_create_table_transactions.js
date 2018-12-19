module.exports = {
    "up": "CREATE TABLE transactions (id INT PRIMARY KEY auto_increment, customer_name text, phone_number INT(8), currency varchar(3), price decimal(10,2), card_holder_name text, card_number text, status tinyint, created datetime, updated datetime)",
    "down": "DROP TABLE transactions"
}