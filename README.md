# F1ian

F1ian is a web app that provides Formula 1 enthusiasts a quick and pleasant way to access historical F1 results. Originally built with Create React App (CRA) and React, it has been modernized using Vite and TypeScript for improved performance and developer experience.

The results of every F1 race, including qualifying (where data exists) and starting grid, and a complete list of Formula 1 circuits old and new.

## Demo

See it at [https://f1ian.andycondon.com/](https://f1ian.andycondon.com/).

## Installation

To run F1ian locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/andrew-rayco/fvition.git
   cd fvition
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   yarn dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Development

### Prerequisites

- Node.js (version 14 or higher)
- Yarn package manager

### Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the application for production.
- `yarn preview`: Previews the production build locally.
- `yarn lint`: Runs ESLint to analyze code for potential errors.

## Data Source

F1ian currently utilizes the Ergast Motor Racing Data API to fetch Formula 1 data. However, the Ergast API is deprecated and will not be updated beyond the 2024 season, with a shutdown planned for early 2025.

### Alternative Data Source

To ensure the continuity and accuracy of F1ian, migrating to an alternative data source is necessary.

**Jolpica**
The proposed successor to the Ergast API, designed as a drop-in replacement with similar endpoints and data structures. Currently in alpha testing.
[https://github.com/jolpica/jolpica-f1](https://github.com/jolpica/jolpica-f1)

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository.**
2. **Create a new branch:** `git checkout -b feature-name`
3. **Make your changes and commit them:** `git commit -m 'Add new feature'`
4. **Push to the branch:** `git push origin feature-name`
5. **Open a pull request.**

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
