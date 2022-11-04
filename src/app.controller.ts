import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import {LocalAuthGuard} from './core/auth/local-auth.guard';

@Controller()
export class AppController {

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return req.user
    }
}
