import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { citiesTableData } from '../../../@core/data/cities-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.scss'],
})
export class CitiesTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
    
      country: {
        title: 'Country',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      lat: {
        title: 'lat',
        type: 'number',
      },
      lng: {
        title: 'lng',
        type: 'number',
      },
    
    },
  };
  
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: citiesTableData) {
    const data = this.service.getDataCities();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
