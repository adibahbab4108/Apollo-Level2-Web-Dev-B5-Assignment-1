## Type Inference and Its benefits

`Type inference is basically a system refers when typescript determine the type of a variable automatically.`

It improves code readability and also rduce redundency

## How TypeScript Improves Code Quality and Maintainability

`TypeScript enforces strict type checking, helping developers catch potential errors early in the development process. By checking types during compile time, it reduces the runtime errors and ensures that the code adheres to the defined types, making the development process more reliable and efficient. This early detection of errors can save time, enhance code quality, and improve overall maintainability.`

## Union (`|`) and Intersection (`&`) Types\

**Example:**

```
type Status = "success" | "error";

type A = { name: string };
type B = { age: number };
type student = A & B;

function printStatus(status: Status) {
  console.log(status);
}

const person: student = { name: "Bob", age: 25 }; // if any property miss, will show error
printStatus("success"); // Output: success
printStatus("error"); // Output: error
```