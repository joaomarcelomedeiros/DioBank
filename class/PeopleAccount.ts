import { DioAccount } from "./DioAccount";
import chalk from "chalk";

export class PeopleAccount extends DioAccount {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
  query = (): void => console.log(chalk.blue(chalk.bgYellow(`----Consulta----`) + `\nProprietario: ${this.name}\nDoc id: ${this.doc_id}\nNumero da Conta:${this.accountNumber}\nSaldo: R$${this.balance}\n`));

}