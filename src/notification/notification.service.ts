
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
@Injectable()
export class NotificationService {
constructor(
@InjectRepository(Notification)
private notificationRepository: Repository<Notification>,
) {}

async sendNotification(notificationDto: CreateNotificationDto):Promise<Notification> {
const { libelle, contenu } = notificationDto;
const notification = this.notificationRepository.create({libelle,contenu,});
return await this.notificationRepository.save(notification);
}


async getAllNotifications(): Promise<Notification[]> {
return await this.notificationRepository.find();
}
}
