import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(query: {
        keyWord: string;
    }): Promise<import("./entities/user.entity").User[]>;
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    update(id: string, UpdateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
