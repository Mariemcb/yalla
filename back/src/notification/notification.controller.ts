import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Notification } from './entities/notification.entity';
@Controller('notification')
export class NotificationController {
constructor(private readonly notificationService: NotificationService) {}
@Post('/send')
async sendNotification(@Body() notificationDto: CreateNotificationDto):Promise<Notification> {
return await this.notificationService.sendNotification(notificationDto);
}
@Get('/getAll')
async getAllNotifications(): Promise<Notification[]> {
return await this.notificationService.getAllNotifications();
}
}