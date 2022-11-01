import { Controller, Get } from '@nestjs/common';
import {Product} from './product.entity';
import {ProductsService} from './products.service';

@Controller('Products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @Get('all')
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }
}
