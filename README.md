# Advanced Scientific Calculator

A modern, feature-rich calculator built with Next.js, TypeScript, and Tailwind CSS. This calculator offers both basic arithmetic and advanced scientific calculations with step-by-step solutions.

## 🌟 Features

### Basic Calculator

- Basic arithmetic operations (+, -, \*, /)
- Real-time calculation
- Keyboard support
- Clear and backspace functionality
- Error handling with toast notifications

### Scientific Calculator

- Trigonometric functions (sin, cos, tan) in degrees
- Mathematical constants (π, e)
- Power and root functions
- Logarithmic calculations
- Complex number support
- Matrix operations

### Advanced Features

- Step-by-step solution breakdowns
- Detailed mathematical explanations
- Support for complex expressions
- Unit conversions
- Matrix calculations
- Interactive UI with dark mode support

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Math Processing**: math.js
- **Step-by-Step Solutions**: OpenAI API
- **Toast Notifications**: react-toastify

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/calculator.git
   cd calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Basic Mode

- Use the number pad for input
- Click operation buttons or use keyboard
- Press Enter or = for results
- Press Escape for clear
- Press Backspace to delete

### Scientific Mode

- Switch to scientific mode using tabs
- Access advanced functions (sin, cos, tan, etc.)
- Use keyboard shortcuts:
  - 's' for sin
  - 'c' for cos
  - 't' for tan
  - 'l' for log

### Advanced Calculator

- Click "Try Advanced Calculator" for step-by-step solutions
- Enter complex expressions
- Get detailed mathematical explanations
- View intermediate steps and results

## 🌐 API Routes

### POST /api/solve

Generates step-by-step solutions for mathematical expressions:

```typescript
POST /api/solve
{
  "expression": "sin(45) + √16"
}
```

## 💡 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [math.js](https://mathjs.org/)
- [OpenAI](https://openai.com/)
