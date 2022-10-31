import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor (@InjectRepository(User) private readonly user:Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    const data = new User()
    data.name = createUserDto.name
    data.desc = createUserDto.desc
    return this.user.save(data)
  }

  findAll(query:{keyWord:string}) {
    return this.user.find({
      where:{
        name:Like(`%${query.keyWord}%`)
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.user.update(id,updateUserDto)
  }

  remove(id: number) {
    return this.user.delete(id)
  }
}
