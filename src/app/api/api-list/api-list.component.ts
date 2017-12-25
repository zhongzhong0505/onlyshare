import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  _allChecked = false;
  _indeterminate = false;
  _displayData = [];
  data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor() {}

  ngOnInit() {}
  _displayDataChange($event) {
    this._displayData = $event;
    this._refreshStatus();
  }

  _refreshStatus() {
    const allChecked = this
      ._displayData
      .every(value => value.checked === true);
    const allUnChecked = this
      ._displayData
      .every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }

  _checkAll(value) {
    if (value) {
      this
        ._displayData
        .forEach(data => {
          data.checked = true;
        });
    } else {
      this
        ._displayData
        .forEach(data => {
          data.checked = false;
        });
    }
    this._refreshStatus();
  }
}
