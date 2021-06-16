import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateClientDto } from 'src/products/dto/create-client.dto';
import { UpdateClientDto } from 'src/products/dto/update-client.dto';
import { Client } from 'src/products/schemas/client.schema';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  getAll(): Promise<Client[]> {
    return this.clientsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Client> {
    return this.clientsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(createClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Client> {
    return this.clientsService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateClientDto,
    @Param('id') id: string,
  ): Promise<Client> {
    return this.clientsService.update(id, updateProductDto);
  }
}
