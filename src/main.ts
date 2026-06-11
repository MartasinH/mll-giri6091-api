import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  app.setGlobalPrefix('api');

  app.enableVersioning({
    type:VersioningType.URI,
    defaultVersion: '1'
    })

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted:true,
    transform: true

}));
  app.setGlobalPrefix('api');

  app.enableCors();

  // configuracion de swagger docs
  const config= new DocumentBuilder ()
  .setTitle('Task Manager API')
  .setDescription('Gestion de tareas')
  .setVersion('1.0')
  .addTag('Task') //agrupar los enpoints bajo la teqiqueta task
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api/docs',app,document);

  await app.listen(process.env.PORT ?? 3000);
  console.log("API IS RUNNING on:http:localhots:300/api/v1");
}
bootstrap();

// npm i --save @nestjs/swagger