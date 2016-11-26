import {Component, OnInit} from '@angular/core';
import {DiveLogEntry} from "./dive-log-entry";

@Component({
  selector: 'app-dive-log',
  templateUrl: './dive-log.component.html',
  styleUrls: ['./dive-log.component.css']
})
export class DiveLogComponent implements OnInit {

  public dives : DiveLogEntry[] = [];

  private _index = 0;

  private _stockDives = DiveLogEntry.stockDives;

  constructor() {
  }

  ngOnInit() {
  }

   public enableAdd() {
     return this._index < this._stockDives.length;
   }

   public addDive(){
     if (this.enableAdd()) {
       this.dives.push(this._stockDives[this._index++]);
     }

   }

   public clearDives(){
     this.dives = [];
     this._index = 0;
   }


}
