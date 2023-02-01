import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  action:string;
  value:string;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit{
action='';
value='';
constructor(  public dialogRef: MatDialogRef<ConfirmationComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,){}
  
  ngOnInit(): void {
    this.action=this.data.action;
    this.value=this.data.value;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConform(): void {
    this.dialogRef.close(true);
  }
}
