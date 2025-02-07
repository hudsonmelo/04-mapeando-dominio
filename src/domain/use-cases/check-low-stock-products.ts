import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

interface CheckLowStockProductsUseCaseResponse {
  lowStockProducts: Product[];
}

export class CheckLowStockProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<CheckLowStockProductsUseCaseResponse> {
    const products = await this.productRepository.findAll();

    const lowStockProducts = products.filter(
      (product) => product.quantity <= product.minQuantity
    );

    return {
      lowStockProducts,
    };
  }
}