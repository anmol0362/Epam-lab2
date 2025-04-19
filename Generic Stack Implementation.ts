class Stack<T> {
    private items: T[] = [];
  
    push(item: T) {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }
  
  // Example Usage
  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  console.log(numberStack.pop());
  
  const stringStack = new Stack<string>();
  stringStack.push("Hello");
  stringStack.push("World");
  console.log(stringStack.peek());
  