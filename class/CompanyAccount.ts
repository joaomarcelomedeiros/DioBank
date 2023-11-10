import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      if (this.validateStatus()) {
        let initialBalance = this.balance;
        this.balance += value;
        this.printOperation('loan',value, initialBalance);
      }
    }  
  }
}
