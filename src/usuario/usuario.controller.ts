import { Controller, Get, Post, Body, Put, Param, Delete, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get('thumb')
  async getThumbnail(@Res() response) {
    const thumb = await this.usuarioService.getThumbnail();
    console.log(thumb.toString('base64'));
    // console.log(thumb);
    response.append('Content-Type', 'image/jpg');
    response.status(200).send(thumb);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() response) {
    response.append('Content-Type', 'image/jpg');
    response.status(200).send(this.usuarioService.findOne(+id));
    // return this.usuarioService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
