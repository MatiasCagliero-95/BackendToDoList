import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { NoteService } from './notes.service';
import { Note } from './entities/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Note> {
    return this.noteService.findOne(+id);
  }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return this.noteService.create(createNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.noteService.remove(+id);
  }

  @Patch(':id/completed')
  updateCompleted(@Param('id') id: string, @Body('completed') completed: boolean): Promise<void> {
    return this.noteService.updateCompleted(+id, completed);
  }
}
