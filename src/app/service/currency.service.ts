import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseCurrencyDto } from '../dto/response.currency.dto';
import { environment } from 'src/environments/environment';
import {ChangeDto} from "../dto/change.dto";
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { 

  }
  v=environment.BACKEND_URL;
  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto>{
    //return this.http.get<any>("${environment.BACKEND_URL}/api/currency/exchange?from="
    return this.http.get<any>(`http://localhost:8080/api/currency/exchange?from=`

    //return this.http.get<any>(`${environment.BACKEND_URL}/api/currency/exchange?from=`
    + from + "&to=" + to + "&amount=" + amount);
  }
  public getCurrencyList(page: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/currency/history?page=`+ page +`&size=10`);
    //return this.http.get<any>(`${environment.BACKEND_URL}/api/currency/history?page=`+ page +`&size=10`);
  }
}                          
