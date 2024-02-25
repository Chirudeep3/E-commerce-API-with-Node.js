# E-commerce API with Node.js

This project is a straightforward E-commerce API built with Node.js, Express, and PostgreSQL. It provides essential endpoints for managing products, categories, carts, and orders.

## Technology Stack

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web application framework for Node.js.
- **PostgreSQL:** Relational database for product, category, cart, and order data.
- **JSON Web Tokens (JWT):** User authentication for registration, login, and secure API requests.

## Project Structure

- **Controllers, Models:** Organized structure for clarity.
- **Config:** Database and JWT configuration.
- **Error Handling:** Global error handler for meaningful responses.

## Getting Started

1. Clone: `git clone https://github.com/your-username/e-commerce-api-nodejs.git`
2. Install: `npm install`
3. Set up PostgreSQL: Update `config/dbConfig.js`.
4. Run: `npm start`

## API Endpoints

- **Category Listing:** `/api/categories`
- **Product Listing:** `/api/products/:categoryId`
- **Product Details:** `/api/product/:productId`
- **Cart Management:** `/api/cart/add-to-cart`, `/api/cart/cart` (Authenticated)
- **Order Placement:** `/api/orders/place-order` (Authenticated)
- **Order History:** `/api/orders/order-history` (Authenticated)
- **Order Details:** `/api/orders/order/:orderId` (Authenticated)
- **User Authentication:** `/api/auth/register`, `/api/auth/login`

## Security Measures

- **Input Validation and Sanitization:** Prevents security vulnerabilities.
- **HTTPS:** Ensures secure communication.
- **Helmet:** Sets HTTP headers for enhanced security.
- **Rate Limiting:** Prevents abuse and brute force attacks.
- **Password Hashing:** Ensures secure storage of passwords.
- **JWT Token Expiry:** Enhances security with token expiry.
- **CORS:** Configured for trusted domains.

## Contribution

Contributions are welcome! Open an issue or submit a pull request for improvements.

## License


