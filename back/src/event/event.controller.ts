import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Categories, Event } from './entities/event.entity';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto): Promise<Event> {
    return this.eventService.createEvent(createEventDto);
  }

  @Get()
  findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEventDto: UpdateEventDto): Promise<Event> {
    return this.eventService.updateEvent(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.eventService.removeEvent(id);
  }

  @Get('title/:title')
  findByTitle(@Param('title') title: string): Promise<Event[]> {
    return this.eventService.findByTitle(title);
  }

  @Get('date/:date')
  findByDate(@Param('date') date: string): Promise<Event[]> {
    const parsedDate = new Date(date);
    return this.eventService.findByDate(parsedDate);
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: Categories): Promise<Event[]> {
    return this.eventService.findByCategory(category);
  }
}