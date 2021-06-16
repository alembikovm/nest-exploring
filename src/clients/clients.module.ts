import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from 'src/products/schemas/client.schema';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController],
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
})
export class ClientsModule {}
