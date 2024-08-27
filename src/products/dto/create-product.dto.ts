/* eslint-disable prettier/prettier */
//export class CreateProductDto {}
import { Product } from "@prisma/client";
export type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

//createdAt DateTime @default(now())
//updatedAt DateTime @updatedAt