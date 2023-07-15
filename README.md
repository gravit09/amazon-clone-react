# Amazon Clone

This is a project that aims to replicate the basic functionalities of the Amazon website using React for the frontend and Node.js for the backend. The project includes a React frontend that interacts with a custom-built API to fetch and display product data.

## Features

- Product browsing: Users can view a list of products, search for specific products, and view individual product details.
- Shopping cart: Users can add products to their cart, update quantities, and proceed to checkout.
- Rest Api : A rest api built using express.js is use to pass the product data to the frontend.
## Installation

1. Clone the repository: `git clone https://github.com/gravit09/amazon-clone.git`
2. Navigate to the project directory: `cd amazon-clone`
3. Install the frontend dependencies: `cd client && npm install`
4. Install the backend dependencies: `cd .. && cd server && npm install`

## Configuration

1. Create a `.env` file in the `server` directory and configure the following variables:
   - `PORT`: Port number for the backend server.

## Running the Application

1. Start the backend server: `cd server && npm start`
2. Start the frontend development server: `cd client && npm start`
3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you encounter any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- The React frontend was built using create-react-app.
- The backend API was developed using Express.js.

## Contact

If you have any questions or inquiries about this project, please feel free to contact me at garvitchoudhary09@gmail.com.
