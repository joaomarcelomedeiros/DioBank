import chalk from 'chalk';

export abstract class DioAccount {
  protected readonly name: string
  protected readonly accountNumber: number
  protected balance: number = 0
  protected status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  protected printOperation = (operation:string, initialBalance:number, value:number) :void=>{
    if(operation == 'withdraw'){
      console.log(chalk.red(chalk.bgYellow(`----Saque----`) + `\nProprietário: ${this.name}\nNumero da Conta:${this.accountNumber}\nValor saque: R$${value} \nSaldo atual: R$${this.balance}\nSaldo anterior: R$${initialBalance}\n`));
    }
    else if(operation == 'deposit'){
      console.log(chalk.green(chalk.bgYellow(`----Deposito----`) + `\nProprietário: ${this.name}\nNumero da Conta:${this.accountNumber}\nValor deposito: R$${value} \nSaldo atual: R$${this.balance}\nSaldo anterior: R$${initialBalance}\n`));
    }
    else if(operation == 'loan'){
      console.log(chalk.keyword('orange')(chalk.bgYellow(`----Empréstimo----`) + `\nProprietário: ${this.name}\nNumero da Conta:${this.accountNumber}\nValor empréstimo: R$${value} \nSaldo atual: R$${this.balance}\nSaldo anterior: R$${initialBalance}\n`));
    }
    else{
      throw new Error('Operação inválida');
    }
  }

  query = (): void => console.log(chalk.blue(chalk.bgYellow(`----Consulta----`) + `\nProprietário: ${this.name}\nNumero da Conta:${this.accountNumber}\nSaldo: R$${this.balance}\n`));
    
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      let initialBalance = this.balance;
      this.balance += value;
      this.printOperation('deposit',value, initialBalance);
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance <= value) {
        let initialBalance = this.balance;
        this.balance -= value;
        this.printOperation('withdraw', initialBalance, value);
      }
      else {
        throw new Error('Valor de saque é menor que o saldo atual!')
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
