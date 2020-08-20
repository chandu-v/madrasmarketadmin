import { Component, OnInit } from '@angular/core';
import { TransactionServiceService } from '../service/transaction-service.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent implements OnInit {
  displayedColumns: string[] = ['order_id', 'amount', 'transaction_time','information','status','transaction_id','user_id'];
  dataSource = [];
  constructor(private transactionService:TransactionServiceService) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe((data)=>{
      this.dataSource = JSON.parse(JSON.stringify(data));
      console.log(this.dataSource);
    })
  }

}
