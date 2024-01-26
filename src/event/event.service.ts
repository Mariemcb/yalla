import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories, Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    const event = this.eventRepository.create(createEventDto);
    return this.eventRepository.save(event);
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.eventRepository.findOne({where: {idEvent:id}});
    if (!event) {
      throw new NotFoundException("Event with ID ${id} not found");
    }
    return event;
  }

  async updateEvent(id: number, updateEventDto: UpdateEventDto): Promise<Event> {
    const existingEvent = await this.findOne(id);
    const updatedEvent = this.eventRepository.merge(existingEvent, updateEventDto);
    return this.eventRepository.save(updatedEvent);
  }

  async removeEvent(id: number): Promise<void> {
    await this.findOne(id); // Ensure the event exists before attempting to delete
    await this.eventRepository.delete(id);
  }

  async findByTitle(titre: string): Promise<Event[]> {
    return this.eventRepository.find({ where: { titre } });
  }

  async findByDate(date: Date): Promise<Event[]> {
    return this.eventRepository.find({ where: { date } });
  }

  async findByCategory(category: Categories): Promise<Event[]> {
    return this.eventRepository.find({ where: { categorie: category } });
  }

}