Here's the updated **Product Requirements Document (PRD)** with an API endpoint to integrate **ChatGPT** for generating step-by-step solutions in the **Advanced Calculator Page**.

---

# **Product Requirements Document (PRD) - Calculator App**

## **Overview**  
The **Calculator App** is designed to provide both **basic** and **scientific** mathematical calculations with a user-friendly interface. It will feature optimized performance and a seamless user experience. Additionally, an **Advanced Calculator Page** will allow users to enter complex mathematical expressions and receive a **step-by-step solution** using **ChatGPT**.

---

## **Core Functionality**
The calculator will support the following features:  

### **1. Basic Arithmetic**
- Addition, Subtraction, Multiplication, Division

### **2. Advanced Calculations**
- Exponents, Square roots, Logarithms
- Trigonometric functions (sin, cos, tan, etc.)
- Matrix operations
- Unit conversions (e.g., cm to inches)
- **Step-by-step solution generation** for advanced expressions using **ChatGPT API**

### **3. Error Handling**
- Notify users with error messages for invalid input using `react-toastify`

### **4. Optimized Performance**
- Utilize `useCallback` and `useMemo` for better rendering performance

---

## **Tech Stack**
- **Next.js** – Server-side rendering and fast loading
- **TypeScript** – Type safety and improved development experience
- **Tailwind CSS** – Responsive UI design
- **shadcn/ui** – Prebuilt accessible UI components
- **math.js** – Advanced mathematical computations
- **react-toastify** – For displaying error messages
- **OpenAI API** – ChatGPT-powered step-by-step solution generation

---

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
│   │   ├── api
│   │   │   └── advance-calculator
│   │   │       └── route.ts
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

---

## **Advanced Calculator Page**
The **Advanced Calculator Page** will allow users to enter complex expressions and receive **step-by-step solutions** powered by **ChatGPT**.

### **Features**
- **User Input**: Users can enter advanced mathematical expressions.
- **Step-by-Step Solution**: The system will request a response from **ChatGPT** and display a detailed solution.
- **Loading State**: A loading indicator will be shown while waiting for the response.
- **Error Handling**: If the response fails or the input is invalid, an error message will be displayed.

---

## **ChatGPT API Integration**
An API endpoint will be created in **Next.js API routes (`/api/advance-calculator/route.ts`)** to handle requests to **ChatGPT**.

### **Workflow**
1. The user enters a **complex mathematical expression** in the **Advanced Calculator Page**.
2. A request is sent to the **API endpoint (`/api/advance-calculator`)**.
3. The API forwards the request to **ChatGPT (OpenAI API)** using a predefined prompt.
4. ChatGPT returns a **step-by-step explanation**.
5. The response is displayed in a **formatted output**.
6. If the request fails, an error message is shown.

---

## **Prompt for Advanced Calculator (in `prompt.ts`)**
```ts
export const ADVANCED_CALCULATOR_PROMPT = `
You are an expert in mathematics. Given a mathematical expression, return a detailed step-by-step solution in a structured manner.
Ensure clarity in explanations and format the response properly using markdown.
If the input is invalid, provide a meaningful error message.
Use proper mathematical notation and indentation for readability.`;
```

---

## **Key Instructions**
- **Basic Mode:** Standard calculator functionalities for quick calculations.
- **Scientific Mode:** Includes trigonometry, logarithms, and advanced operations.
- **Advanced Mode:** Allows complex expressions with **ChatGPT-powered** step-by-step solutions.
- **API Endpoint:** A dedicated API will handle ChatGPT requests.
- **Loading State:** Show a **spinner** or loading animation while waiting for the response.
- **Error Handling:** Use `react-toastify` for displaying errors when the response fails.
- **Performance Optimization:** Implement memoization with `useCallback` and `useMemo`.

---

