import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  accountNo: string;
  accountLead: string;
  accountManger: string;
  activeDate: string;
  invoiceModel: string;
  FTE: string;
  dailyInflow: string;
  avrgMonthlyCharges: string;
  mtdCharges: string;
  avrgMonthlyPayment: string;
  mtdPayment: string;
  totalAr: string;

}

interface Account{

  id: number;
  account:{
    name: string;
    lead: string;
    manager: string;
    activedDate: string;
    invoiceType: string;
  };
  dailyInflow:{
    noOfPostings: number;
    noOfDeposits: number;
    noOfPatients: number;
  }
  fte: {
    value: number;
    demographics: string;
    eligibilityVerification: string;
    claimProcessing: string;
    coding: string;
    paymentPosting: string;
    accountReceivable: string;
    credentialing: string;
    patientCalling: string;
  };
  financials: {
    avgMonthlyCharges: string;
    mtdCharges: string;
    avgMonthlyPayment: string;
    mtdPayment: string;
    insAR: string;
    insARGreaterThan90: string;
    patientAR: string;
    patientARGreaterThan90: string;
  };
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  windowRef: Window;
  items: Item[] = [];
  accounts: Account[] = [];
 

  constructor(private router: Router) {
    this.windowRef = window; // Assign the global window object
    window.onload = () => {
      const inputElement = document.getElementById('itemCount') as HTMLInputElement;
      inputElement.value = '2'; // Default count is 2
    };
  }
  startDate = new Date('2020-01-01');
  endDate = new Date('2022-12-31');
  accountNumbers = ['ESSEX', 'GCM', 'Suncost', 'MeryLand', 'Solar']
  accountLeads = ['SABA', 'SATISH', 'PRITHVI', 'DILIP', 'SOUMYA'];
  managers = ['RAJESH', 'JAMES', 'SAYED', 'MANJU', 'MITHUN'];
  invoiceModels = ['COLLECTION BASED', 'FTE BASED', 'COLLECTION BASED', 'COLLECTION BASED', 'FTE BASED'];
  generatedItems = this.generateRandomItems(2);
  generateRandomItems(count: number){
    this.items = []; 
    this.accounts = []; 
    for (let i = 0; i < count; i++) {
      this.items.push({
      accountNo: this.accountNumbers[i % this.accountNumbers.length],
      accountLead: this.accountLeads[i % this.accountLeads.length],
      accountManger: this.managers[i % this.managers.length],
      activeDate: this.getRandomDate(this.startDate, this.endDate),
      invoiceModel: this.invoiceModels[i % this.invoiceModels.length],
      FTE: this.getRandomNumberAsString(1, 100),
      dailyInflow: this.getRandomDollarValue(100000, 20000000),
      avrgMonthlyCharges: this.getRandomDollarValue(100000, 20000000),
      mtdCharges: this.getRandomDollarValue(100000, 20000000),
      avrgMonthlyPayment: this.getRandomDollarValue(100000, 20000000),
      mtdPayment: this.getRandomDollarValue(100000, 20000000),
      totalAr: this.getRandomNumberAsString(1, 100)
    });
  }
    for (let i = 0; i < count; i++) {
      this.accounts.push({
        id: i,
        account: {
          name: this.accountNumbers[i % this.accountNumbers.length],
          lead: this.accountLeads[i % this.accountLeads.length],
          manager: this.managers[i % this.managers.length],
          activedDate: this.getRandomDate(this.startDate, this.endDate),
          invoiceType: this.invoiceModels[i % this.invoiceModels.length]
        },
        dailyInflow: {
          noOfPostings: this.getRandomInt(1, 100),
          noOfDeposits: this.getRandomInt(1, 100),
          noOfPatients: this.getRandomInt(1, 100)
        },
        fte: {
          value: this.getRandomInt(1, 100),
          demographics: this.getRandomNumberAsString(1, 100),
          eligibilityVerification: this.getRandomNumberAsString(1, 100),
          claimProcessing: this.getRandomNumberAsString(1, 100),
          coding: this.getRandomNumberAsString(1, 100),
          paymentPosting: this.getRandomNumberAsString(1, 100),
          accountReceivable: this.getRandomNumberAsString(1, 100),
          credentialing: this.getRandomNumberAsString(1, 100),
          patientCalling: this.getRandomNumberAsString(1, 100)
        },
        financials: {
          avgMonthlyCharges: this.getRandomDollarValue(100000, 20000000),
          mtdCharges: this.getRandomDollarValue(100000, 20000000),
          avgMonthlyPayment: this.getRandomDollarValue(100000, 20000000),
          mtdPayment: this.getRandomDollarValue(100000, 20000000),
          insAR: this.getRandomNumberAsString(1, 100),
          insARGreaterThan90: this.getRandomNumberAsString(1, 100),
          patientAR: this.getRandomNumberAsString(1, 100),
          patientARGreaterThan90: this.getRandomNumberAsString(1, 100)
        }
      });  
}
  }

  getRandomDate(start: Date, end: Date): string {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toLocaleDateString('en-US'); // Format as needed
  }
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomNumberAsString(min: number, max: number): string {
    const randomNum = this.getRandomInt(min, max);
    return randomNum.toString(); // Convert to string
  }

  getRandomDollarValue(min: number, max: number): string {
    const randomNum = this.getRandomInt(min, max);
    return `$${randomNum.toLocaleString('en-US')}`; // Format as currency with commas
  }

 displayType : boolean = false;
toggleDisplay(){
  this.displayType = !this.displayType;
  }
  getNumberOfItemsFromInput(): number {
    const inputElement = document.getElementById('itemCount') as HTMLInputElement;
    const count = parseInt(inputElement.value, 10);
    return isNaN(count) ? 2 : count; // Default to 2 if input is invalid
  }
  generateItemsBasedOnInput() {
    const count = this.getNumberOfItemsFromInput();
    const generatedItems = this.generateRandomItems(count);
    console.log(generatedItems); // Log the generated items or do something else with them
  }
  // this.windowRef.onload = () => {
  //   const inputElement = document.getElementById('itemCount') as HTMLInputElement;
  //   inputElement.value = '2'; // Default count is 2
  // };
  ngOnInit() {
    console.log(this.windowRef.innerWidth); // Example: accessing the window's inner width
  }
  logout(){

    this.router.navigate(['/login']);
  }

}  

