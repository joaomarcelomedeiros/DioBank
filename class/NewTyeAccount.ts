import { DioAccount } from "./DioAccount";

export class NewTypeAccount extends DioAccount{
    deposit = (value: number) :void =>{
        if(this.validateStatus()){
            let initialBalance = this.balance;
            this.balance+=(value+10);
            this.printOperation('deposit',initialBalance,value);
        }
    }
}