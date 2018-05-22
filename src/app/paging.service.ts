import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  constructor() { }
  getPageNumber(dataLength, tweetsCount, pageNumber) {
    const totalPages = Math.ceil(dataLength / tweetsCount);
    const currentPage = pageNumber;
    const startIndex = (pageNumber - 1) * tweetsCount;
    const endIndex = startIndex + tweetsCount;
    return {
      totalPages: totalPages,
      currentPage: currentPage,
      startIndex: startIndex,
      endIndex: endIndex
    };
  }
}
