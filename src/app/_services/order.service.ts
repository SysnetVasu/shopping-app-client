import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IInvoiceToCreate, IOrderToCreate } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = environment.apiUrl+'api/';
  isOrderDone=false;

  constructor(private http: HttpClient) { }

  //Creates an order.
  creatOrder(order: IOrderToCreate) {
    return this.http.post(this.baseUrl + 'orders', order);
  }
  
  //Returns all orders.
  getOrdersForUser() {
    return  this.http.get(this.baseUrl + 'orders');
   
  }

  //Returns an order by Id.
  getOrderDetailed(id: string) {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }


  //Deletes an order by Id.
  deleteOrder(id:string){
    return this.http.delete(this.baseUrl + 'orders/' + id);
  }
}
