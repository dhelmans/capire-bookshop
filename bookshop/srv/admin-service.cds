using {sap.capire.bookshop as my} from '../db/schema';

service AdminService @(
    requires: 'authenticated-user',
    path    : '/admin'
) {

    entity Books      as projection on my.Books;

    action createBook(title : Books:title,
                      descr : Books:descr,
                      author : Authors:ID,
                      genre : Genres:ID,
                      stock : Books:stock,
                      price : Books:price,
                      currency : Currencies:code);

    action updateBook(book : Books:ID @mandatory,
                      title : Books:title,
                      descr : Books:descr,
                      author : Authors:ID,
                      genre : Genres:ID,
                      stock : Books:stock,
                      price : Books:price,
                      currency : Currencies:code);

    action deleteBook(book : Books:ID);
    action deleteAll();
    entity Authors    as projection on my.Authors;
    entity Genres     as projection on my.Genres;
    entity Currencies as projection on my.Currencies;

}
