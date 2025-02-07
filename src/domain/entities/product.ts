import { Entity } from "@/core/entities/entity";

interface ProductProps {
  name: string
  size: string
  color: string
  quantity: number
  minQuantity: number
  price: number
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name
  }

  get size() {
    return this.props.size
  }

  get color() {
    return this.props.color
  }

  get quantity() {
    return this.props.quantity
  }

  get minQuantity() {
    return this.props.minQuantity
  }

  get price() {
    return this.props.price
  }
}