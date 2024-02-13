import { createContext } from 'react';
import { ProductData } from '../types/Product.types';

export const ProductContext = createContext<ProductData | any>(undefined);
