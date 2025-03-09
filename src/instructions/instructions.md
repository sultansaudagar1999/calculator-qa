# **Product Requirements Document (PRD) - Calculator App**

## **Overview**
The **Calculator App** is designed to provide both **basic** and **scientific** mathematical calculations with a user-friendly interface. It will feature optimized performance and a seamless user experience. Additionally, an **Advanced Calculator Page** will allow users to enter complex mathematical expressions and receive a **step-by-step solution**.

## **Core Functionality**
The calculator will support the following features:
- **Basic Arithmetic**: Addition, Subtraction, Multiplication, Division
- **Advanced Calculations**:
  - Exponents, Square roots, Logarithms
  - Trigonometric functions (sin, cos, tan, etc.)
  - Matrix operations
  - Unit conversions (e.g., cm to inches)
  - **Step-by-step solution generation** for advanced expressions
- **Error Handling**: Notify users with error messages for invalid input using `react-toastify`
- **Optimized Performance**: Utilize `useCallback` and `useMemo` for better rendering performance

## **Tech Stack**
- **Next.js** – Server-side rendering and fast loading
- **TypeScript** – Type safety and improved development experience
- **Tailwind CSS** – Responsive UI design
- **shadcn/ui** – Prebuilt accessible UI components
- **math.js** – Advanced mathematical computations
- **react-toastify** – For displaying error messages

## **Project Structure**
```
.
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   │   ├── advance-calculator
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── calculator-components
│   │   │   ├── calculator-button-grid.tsx
│   │   │   ├── calculator-button.tsx
│   │   │   ├── calculator-display.tsx
│   │   │   ├── calculator-document.tsx
│   │   │   ├── calculator-tabs.tsx
│   │   │   └── calculator.tsx
│   │   ├── global
│   │   │   └── footer.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       └── tabs.tsx
│   ├── instructions
│   │   └── instructions.md
│   └── lib
│       ├── calculator-utils.ts
│       ├── constants.ts
│       ├── prompt.ts
│       └── utils.ts
└── tsconfig.json
```

## **Usage of math.js Library**
The `math.js` library will be used for handling complex mathematical computations. Below are some examples:
- `evaluate('12 / (2.3 + 0.7)')` → `4`
- `evaluate('12.7 cm to inch')` → `5 inch`
- `evaluate('sin(45 deg) ^ 2')` → `0.5`
- `evaluate('9 / 3 + 2i')` → `3 + 2i`
- `evaluate('det([-1, 2; 3, 1])')` → `-7`

## **Advanced Calculator Page**
The **Advanced Calculator Page** will allow users to enter complex expressions and receive **step-by-step solutions**. This will be useful for:
- **Algebraic expressions**
- **Differentiation and Integration**
- **Solving equations**
- **Matrix operations**
- **Complex number calculations**

### **Prompt for Advanced Calculator (in `prompt.ts`)**
```ts
export const ADVANCED_CALCULATOR_PROMPT = `
You are an advanced mathematical solver. Given a mathematical expression, return a detailed step-by-step solution.
Ensure clarity in explanations and format the response properly using markdown where needed.
If the input is invalid, provide a meaningful error message.`;
```

## **Key Instructions**
- **Basic Mode:** Standard calculator functionalities for quick calculations.
- **Scientific Mode:** Includes trigonometry, logarithms, and advanced operations.
- **Advanced Mode:** Allows complex expressions with step-by-step solutions.
- **Error Handling:** Use `react-toastify` to display errors.
- **Performance Optimization:** Implement memoization with `useCallback` and `useMemo`.

