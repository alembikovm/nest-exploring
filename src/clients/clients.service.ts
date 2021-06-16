import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from 'src/products/dto/create-client.dto';
import { UpdateClientDto } from 'src/products/dto/update-client.dto';
import { Client, ClientDocument } from 'src/products/schemas/client.schema';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  @Get()
  async getAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async getById(id: string): Promise<Client> {
    return this.clientModel.findById(id);
  }

  async create(clientDto: CreateClientDto) {
    const newClient = new this.clientModel(clientDto);
    return newClient.save();
  }

  async remove(id: string): Promise<Client> {
    return this.clientModel.findByIdAndRemove(id);
  }

  async update(id: string, clientDto: UpdateClientDto): Promise<Client> {
    return this.clientModel.findByIdAndUpdate(id, clientDto, { new: true });
  }
}
