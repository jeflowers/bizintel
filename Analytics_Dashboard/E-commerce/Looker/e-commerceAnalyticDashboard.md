# E-commerce Analytics Dashboard

A comprehensive Business Intelligence dashboard built with React, demonstrating advanced data visualization capabilities similar to Looker and other BI platforms.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Data Model](#data-model)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive Visualizations**
  - Sales performance time series analysis
  - Customer segmentation pie charts
  - Product category performance bar charts
  - Real-time KPI metrics cards

- **Technical Capabilities**
  - Responsive design for all screen sizes
  - Interactive tooltips and legends
  - Cross-filtering between charts
  - Custom color themes
  - Data aggregation and transformation

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecommerce-analytics-dashboard.git
cd ecommerce-analytics-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
ecommerce-dashboard/
├── components/
│   ├── Dashboard.js
│   ├── charts/
│   │   ├── SalesChart.js
│   │   ├── CustomerSegmentation.js
│   │   ├── ProductPerformance.js
│   │   └── KPIMetrics.js
│   └── ui/
│       ├── Card.js
│       └── Layout.js
├── data/
│   └── mockData.js
├── utils/
│   ├── transformations.js
│   └── formatters.js
└── styles/
    └── tailwind.css
```

## Components

### Dashboard
The main container component that manages the layout and data flow.

### Charts
1. **SalesChart**: Time series visualization for sales and orders
   ```javascript
   <SalesChart data={salesData} />
   ```

2. **CustomerSegmentation**: Pie chart for customer segments
   ```javascript
   <CustomerSegmentation data={customerData} />
   ```

3. **ProductPerformance**: Bar chart for category analysis
   ```javascript
   <ProductPerformance data={productData} />
   ```

4. **KPIMetrics**: Card-based metric display
   ```javascript
   <KPIMetrics metrics={metricsData} />
   ```

## Data Model

### Sales Data Structure
```javascript
{
  month: string,
  sales: number,
  orders: number
}
```

### Customer Segments Structure
```javascript
{
  name: string,
  value: number
}
```

### Product Performance Structure
```javascript
{
  category: string,
  revenue: number
}
```

## Customization

### Theme Configuration
Modify the theme in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#8884d8',
        secondary: '#82ca9d'
      }
    }
  }
}
```

### Adding New Visualizations
1. Create a new component in `components/charts`
2. Import and add to the Dashboard grid
3. Configure data transformation if needed
4. Style using Tailwind CSS classes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Charts powered by [Recharts](https://recharts.org/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)

## Support

For support, email support@example.com or join our Slack channel.
