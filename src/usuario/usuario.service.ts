import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
const imageThumbnail = require('image-thumbnail');

@Injectable()
export class UsuarioService {
  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  getThumbnail() {
    const file: Buffer = readFileSync('/tmp/coffee.jpg');
    // let options = { percentage: 25, responseType: 'base64' }
    //let options = { percentage: 15 }
    let options = {};
    let t = imageThumbnail(file, options)
      .then(thumbnail => {
        return thumbnail;
      })
      .catch(err => console.error(err));
    return t;
  }

  findOne(id: number) {
    const file: Buffer = readFileSync('/tmp/jupiter.jpg');
    // process.stdout.write(file);
    return file;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
