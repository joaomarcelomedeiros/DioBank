import { CompanyAccount } from './class/CompanyAccount'
import { NewTypeAccount } from './class/NewTyeAccount'
import { PeopleAccount } from './class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(0, 'Nath', 0);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 1);
const newTypeAccount: NewTypeAccount = new NewTypeAccount('Fernanda', 2);

companyAccount.deposit(100);
peopleAccount.deposit(50);
newTypeAccount.deposit(20);
newTypeAccount.withdraw(30);
companyAccount.getLoan(100)
peopleAccount.query();
companyAccount.query();
newTypeAccount.query();