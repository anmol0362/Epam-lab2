enum Operator {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
  }
  
  function calculate(a: number, b: number, op: Operator): number {
    switch (op) {
      case Operator.Add: return a + b;
      case Operator.Subtract: return a - b;
      case Operator.Multiply: return a * b;
      case Operator.Divide: return a / b;
    }
  }
  
  // Example Usage
  console.log(calculate(10, 5, Operator.Add));
  console.log(calculate(10, 5, Operator.Divide));
  