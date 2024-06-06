export class Livre {
  id: number;
  title: string;
  author: string;
  publishedDate: string | null | Date;
  isbn: string;
  summary: string;

  constructor() {
    this.id = 0;
    this.title = '';
    this.author = '';
    this.publishedDate = new Date();
    this.isbn = '';
    this.summary = '';
  }
}
