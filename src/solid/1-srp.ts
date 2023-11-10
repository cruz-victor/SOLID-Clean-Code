(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService{
        //It has a Single Responsibility because it manage only products (get, save, delete, update)
        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }   

        saveProducto(product:Product){
            console.log('Guardando en base de datos', product );
        }
    }

    class MailerService{        
        //It has a Single Responsibility because it manage only mail logics (sendEmail)
        private masterEmail:string='victor@correo.com';

        sendEmail(emails:string[], template:'to-clients'|'to-admins'){
            console.log('Enviando correo a los cliente',this.masterEmail, template, emails);
        }
    }

    class CartService{
        //It has Single Responsibility  because it manage only cart products
        addProductId(productId:number){
            console.log('Agregando al carrito ', productId );
        }
    }
        
    class CartBloc{
        //It has Single Responsibility because it manage only Bloc Logic Component about Cart
        private cartService:CartService;

        constructor(cartService:CartService){
            this.cartService=cartService;
        }

        onAddToCart( productId: number ) {            
            this.cartService.addProductId(productId);
        }    
    }

    

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        //It has Single Responsibility because it manage only Bloc Logic Component about Product
        private productService:ProductService;
        private mailerService:MailerService;

        constructor(productService:ProductService, mailserService:MailerService){
            this.productService=productService;
            this.mailerService=mailserService;
        }

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProducto(product);
        }  
        
        notifyClients() {
            this.mailerService.sendEmail(['grace@gmail.ocom'], 'to-clients')
        }        
    }
    

    const productService=new ProductService();
    const cartService=new CartService();    
    const mailerService=new MailerService();

    const productBloc = new ProductBloc(productService, mailerService);
    const cartBloc=new CartBloc(cartService);    

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);


})();