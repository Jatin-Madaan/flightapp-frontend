import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(priceList: any, flag: number): any {
    if (flag == 1) {
      return priceList.sort((a, b) => {
        let x = a.price;
        let y = b.price;
        if (x > y) {
          return 1;
        } else {
          return -1;
        }
        return 0;
      });
    }
    if (flag == 0) {
      return priceList.sort((a, b) => {
        let x = a.price;
        let y = b.price;
        if (x > y) {
          return -1;
        } else {
          return 1;
        }
        return 0;
      });
    }
  }
}
