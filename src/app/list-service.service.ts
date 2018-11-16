import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IList } from './list';
import { Observable, Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private _url:  string = "/assets/data/list.json"; 
  constructor( private http: HttpClient) { }
  getList(): Observable<IList[]>{
    return this.http.get<IList[]>(this._url);


//     return [
//       {     
//         "StrataName": "SampleCommunity",
//         "NumberOfUnits": 200,
//         "StreetAddress": "Sample Street",
//         "City": "Sample City",
//         "Province": "Alberta",
//         "SubscriptionEndDate": "2020-04-28T00:00:00",
//     }
   
// {
//         "StrataName": "EZ Condo Tools Super Admin",
//         "NumberOfUnits": 1,
//         "StreetAddress": "Ross Road",
//         "City": "Kelowna",
//         "Province": "British Columbia",
//         "SubscriptionEndDate": "2049-07-18T00:00:00",
//     }
//     ]
  }
  
}
