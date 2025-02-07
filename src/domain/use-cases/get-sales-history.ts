import { Sale } from "../entities/sale";
import { SaleRepository } from "../repositories/sale-repository";

interface GetSalesHistoryUseCaseRequest {
  startDate: Date;
  endDate: Date;
}

interface GetSalesHistoryUseCaseResponse {
  sales: Sale[];
}

export class GetSalesHistoryUseCase {
  constructor(private saleRepository: SaleRepository) {}

  async execute({
    startDate,
    endDate,
  }: GetSalesHistoryUseCaseRequest): Promise<GetSalesHistoryUseCaseResponse> {
    const sales = await this.saleRepository.findByPeriod(startDate, endDate);

    return {
      sales,
    };
  }
}