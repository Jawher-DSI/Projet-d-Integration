import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeconnComponent } from 'src/app/Dialogs/deconn/deconn.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarforMe: EventEmitter <any>= new EventEmitter ();


  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarforMe.emit();
  }
  opendialog(){
    this.dialog.open(DeconnComponent);
  }

}
