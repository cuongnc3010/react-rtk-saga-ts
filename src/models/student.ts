export interface Student {
  id?: string;
  name: string;
  age: number;
  mark: number;
  gender: 'female' | 'male';
  city: 'string';

  createdAt?: number;
  updatedAt?: number;
}
