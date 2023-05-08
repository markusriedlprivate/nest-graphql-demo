import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}
  async findAll(): Promise<Pet[]> {
    // const pet = new Pet();
    // pet.id = 1;
    // pet.name = 'Mambo';
    // return [pet];
    return this.petsRepository.find(); // SELECT * FROM table
  }
}
