class SmartCalculator {
  constructor(initialValue) {
    this.expression = [initialValue];
    this.operands = ['^', '*', '/', '-', '+'];
  }

  add(number) {
    this.expression.push('+');
    this.expression.push(number);
    return this;
  }

  subtract(number) {
    this.expression.push('-');
    this.expression.push(number);
    return this;
  }

  multiply(number) {
    this.expression.push('*');
    this.expression.push(number);
    return this;
  }

  devide(number) {
    this.expression.push('/');
    this.expression.push(number);
    return this;
  }

  pow(number) {
    this.expression.push('^');
    this.expression.push(number);
    return this;
  }

  toString() {
    for (let i = 0, lenOp = this.operands.length; i < lenOp; i += 1) {
      const searchOperand = this.operands[i];

      for (let j = 0, lenExpr = this.expression.length; j < lenExpr;) {
        const action = this.expression[j];

        if (action === searchOperand) {
          if (action === '^') {
            const last = this.expression.lastIndexOf('^');

            this.expression[last] = Math.pow(this.expression[last - 1], this.expression[last + 1]);
            this.expression.splice(last + 1, 1);
            this.expression.splice(last - 1, 1);
          }

          if (action === '*') {
            this.expression[j] = this.expression[j + 1] * this.expression[j - 1];
            this.expression.splice(j + 1, 1);
            this.expression.splice(j - 1, 1);
          }

          if (action === '/') {
            this.expression[j] = this.expression[j - 1] / this.expression[j + 1];
            this.expression.splice(j + 1, 1);
            this.expression.splice(j - 1, 1);
          }

          if (action === '-') {
            this.expression[j] = this.expression[j - 1] - this.expression[j + 1];
            this.expression.splice(j + 1, 1);
            this.expression.splice(j - 1, 1);
          }

          if (action === '+') {
            this.expression[j] = this.expression[j + 1] + this.expression[j - 1];
            this.expression.splice(j + 1, 1);
            this.expression.splice(j - 1, 1);
          }
        } else { j += 1; }
      }
    }

    return this.expression[0];
  }
}

module.exports = SmartCalculator;
